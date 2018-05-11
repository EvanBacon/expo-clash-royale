import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

import getLocationAsync from '../getLocationAsync';

import "@expo/vector-icons"; // Version can be specified in package.json

/*
  Yay everything worked out, we have the users location, we can now start showing: `Charlie Cheever fans in your area`!
  Now the user could always go back and turn off the permissions... D: 
  But because of how we setup our redux we can be prepared for that!! :D
*/
export default class App extends Component {
  state = { location: null };
  componentDidMount() {
    this.syncLocationAsync();
  }
  syncLocationAsync = async () => {
    const location = await getLocationAsync();
    this.setState({ location });
  };

  render() {
    const { location } = this.state;
    if (!location) {
      return null;
    }
    const {latitude, longitude} = location.coords;
    return (
      <View style={styles.container}>
        <Card title="Granted">
          <Text style={styles.paragraph}>
            Granted! {latitude} {longitude}
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});