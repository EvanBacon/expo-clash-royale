import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { dispatch } from '@rematch/core'; // Version can be specified in package.json
import { connect } from 'react-redux'; // Version can be specified in package.json
import { Card } from 'react-native-elements'; // Version can be specified in package.json

import 'redux'; // Version can be specified in package.json
import '@expo/vector-icons'; // Version can be specified in package.json


/*
  This is the initial state - the user hasn't indicated if they trust us or not.
  Nowadays it's really cool to explain in a nice pretty way (with pazazz), why we need a permission.
  Then after we've dazzled them, we show the standard alert...
*/
class Undetermined extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title="Undetermined">
          <Button onPress={this.props.askAsync} title="Ask for permissions" />
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
});

export default connect(() => ({
  askAsync: dispatch.locationPermission.askAsync,
}))(Undetermined);
