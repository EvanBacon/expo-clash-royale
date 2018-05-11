import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fire from '../Firebase/Fire';
export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };

  renderButton = () => (
    <TouchableOpacity onPress={() => Fire.shared.login()}>
      <View
        style={{
          width: '50%',
          alignSelf: 'center',
          borderRadius: 4,
          padding: 24,
          backgroundColor: '#3B5998',
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Login to Facebook
        </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.getStartedText}>
          Welcome LizardBook
        </Text>

        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lime',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
