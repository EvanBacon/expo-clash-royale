import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { View } from '../differently-native';
import { WebBrowser } from 'expo';
import Assets from '../Assets';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import CartoonText from '../components/CartoonText';

const { height } = Dimensions.get('window');

const EmptyShopList = () => (
  <View
    style={{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'red',
      paddingTop: 30,
      height: height * 0.75,
    }}
  >
    <View
      style={{
        width: 64,
        aspectRatio: 1,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
      }}
    >
      <Image
        source={Assets.images.icons['store.png']}
        style={{ resizeMode: 'contain', flex: 1 }}
      />
    </View>
    <CartoonText style={{ fontSize: 20 }}>Shop Unlocks</CartoonText>
    <CartoonText style={{ fontSize: 16, color: '#5ECCFE' }}>
      At Arena 1
    </CartoonText>
  </View>
);

export default class ShopScreen extends React.Component {
  static navigationOptions = {
    title: 'Shop',
  };

  render() {
    const evanImage = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/7/75/Evan_Bacon%2C_Design_Technologist_II_at_Frog_Design.jpg',
    };
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={EmptyShopList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C4A5C',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {},
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
