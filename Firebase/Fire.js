const firebase = require('firebase'); // Version can be specified in package.json
// Required for side-effects
require('firebase/firestore'); // 4.12.1
import Expo from 'expo';
import Secret from './Secret';
import getUserInfo from './utils/getUserInfo';
import getSlug from './utils/getSlug';
import { dispatch } from '@rematch/core'; // Version can be specified in package.json
import { AsyncStorage } from 'react-native';
const FacebookApiKey = '1738656842846785';
const collectionName = getSlug();

const FBTokenKey = '@Lizard:FBToken';

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  logout = async () => {
    this.facebookToken = null;
    try {
      await AsyncStorage.removeItem(FBTokenKey);
    } catch (error) {
      alert('Error: clearing token:', error);
    }
    try {
      await firebase.auth().signOut();
    } catch (error) {
      alert('Error: signing out:', error);
    }
    // The auth observer should clear the redux user and that will reset the UI to the login page <33
  };

  init = () => firebase.initializeApp(Secret);

  observeAuth = async () => {
    let facebookToken = await AsyncStorage.getItem(FBTokenKey);
    if (facebookToken) {
      console.log('found token - logging in', facebookToken);
      this.facebookToken = facebookToken;
    }

    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  };

  onAuthStateChanged = async user => {
    console.log('got auth state', user);
    if (!user) {
      dispatch.auth.set(null);
      if (this.facebookToken) {
        this._firebaseLoginWithFacebookToken(this.facebookToken);
      }
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    } else {
      console.log('user was logged in... setup user');
      this.authFound(user);
    }
  };

  authFound = async user => {
    // const databaseUser = {}; //await this.getUser();
    // console.log("current user", {databaseUser})
    // this.saveUser();

    // if (this.facebookToken) {
    //   try {
    //     // let userInfo = await this._callGraph(this.facebookToken);
    //     // if (typeof userInfo === 'string') {
    //     //   userInfo = JSON.parse(userInfo);
    //     // }
    //     // console.log('Facebook user', user, userInfo);
    //     // this.saveUserInfo(userInfo);
    //     // user = { ...user, ...userInfo };
    //     console.log('got FB data');
    //   } catch (error) {
    //     console.error(error);
    //   }
    // } else {
    //   // user = { ...user };
    // }
    console.log("auth'd", user);
    dispatch.auth.set(user);
  };

  getUser = () => {
    return new Promise((res, rej) => {
      this.doc
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            console.log('Document data:', doc.data());
            this.userData = doc.data();
          }
          res();
        })
        .catch(rej);
    });
  };

  saveUser = () => {
    const user = getUserInfo();
    this.saveUserInfo(user);
  };

  saveUserInfo = info => {
    const { uid } = this;
    if (!uid || !info) {
      return;
    }
    if (typeof info === 'string') {
      info = JSON.parse(info);
    }
    info.uid = uid;
    console.log('saveUserInfo', uid, info);
    const ref = this.doc;

    ref.set(info, { merge: true });
  };

  _callGraph = async token => {
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`,
    );
    return JSON.stringify(await response.json());
  };

  facebookToken = null;

  login = async () => {
    const token = await this._doFacebookLoginFlow();
    if (token) {
      this._firebaseLoginWithFacebookToken(token);
    }
  };

  _loginToFacebook = () =>
    Expo.Facebook.logInWithReadPermissionsAsync(FacebookApiKey, {
      permissions: ['public_profile', 'email', 'user_friends'],
    });

  _doFacebookLoginFlow = async () => {
    const { type, token } = await this._loginToFacebook();

    console.log('Facebook sign in', { token, type });
    if (type === 'success') {
      await AsyncStorage.setItem(FBTokenKey, token);
      this.facebookToken = token;
      return token;
    } else {
      console.log("couldn't sign in:", { type });
      // Maybe the user cancelled
      alert("Couldn't to sign-in :p");
    }
    return null;
  };

  upgradeAccount = async () => {
    const token = await this._doFacebookLoginFlow();

    if (token) {
      this._upgradeAccountWithToken(token);
    }
  };

  // Convert anon to full user!
  _upgradeAccountWithToken = async token => {
    console.log('upgrade Account With Token', token);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    try {
      let user = await firebase
        .auth()
        .currentUser.linkWithCredential(credential);
      console.log('Upgraded!', user);
      this.authFound(user);
    } catch (error) {
      console.log('attempt login');
      this._firebaseLoginWithFacebookToken(token);
      try {
        const user = await firebase.auth().signInWithCredential(credential);
        this.authFound(user);
      } catch (error) {
        console.log(error);

        alert(error);
        return;
      }
    }
  };

  // Sign in with credential from the Facebook user.
  _firebaseLoginWithFacebookToken = async token => {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    try {
      const user = await firebase.auth().signInWithCredential(credential);
      console.log('login with facebook', user);
    } catch (error) {
      console.warn('Add Error for login', error);
      alert('Add Error for login', error);
    }
  };

  saveScore = score => {
    this.saveUserInfo({
      timestamp: new Date().getTime(),
      score,
    });
  };

  getPagedScore = async ({ size, start }) => {
    // const slug = getSlug();

    let ref = this.collection.orderBy('score', 'desc').limit(size);
    try {
      if (start) {
        ref = ref.startAfter(start);
      }

      const querySnapshot = await ref.get();
      const data = [];
      querySnapshot.forEach(function(doc) {
        const _data = doc.data();
        data.push({ key: doc.id, ..._data, title: _data.deviceName });
      });
      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

      return { data, cursor: lastVisible };
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  };

  /*
    negative values are also accepted... Use this for spending and for updating after a game.
  */
  addCurrency = amount => {
    return new Promise((res, rej) => {
      this.db
        .runTransaction(transaction => {
          return transaction.get(this.doc).then(userDoc => {
            if (!userDoc.exists) {
              throw 'Document does not exist!';
            }

            const data = userDoc.data();
            const currency = data.currency || 0;
            const newCurrency = currency + amount;
            transaction.update(this.doc, { currency: newCurrency });
            this.user.currency = newCurrency;
            return newCurrency;
          });
        })
        .then(res)
        .catch(rej);
    });
  };

  get collection() {
    return this.db.collection(collectionName);
  }
  get doc() {
    return this.collection.doc(this.uid);
  }

  get db() {
    return firebase.firestore();
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
}

Fire.shared = new Fire();
export default Fire;
