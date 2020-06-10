import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Assets from '../Assets';

const st = {
  light: {},
  dark: {},
};
export default class GucciBackdrop extends React.Component {
  render() {
    return (
      <Image
        source={Assets.images.background.tiles.dark['rg.png']}
        style={[
          StyleSheet.absoluteFill,
          {
            width: '100%',
            height: '100%',
            backgroundColor: '#E0CAA5', // '#31241C',
            tintColor: '#31241C', //'#9A8982',
            resizeMode: 'repeat',
          },
        ]}
      />
    );
  }
}
