import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { View } from '../differently-native';
import Assets from '../Assets';

export default (Loader = ({ tint, value, style, offset, children }) => (
  <View style={[styles.container, style]}>
    <Image
      style={[
        styles.fill,
        {
          width: offset + (value - offset),
          backgroundColor: tint,
        },
      ]}
      source={Assets.images['bar_fill.png']}
    />
    {children}
  </View>
));

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  fill: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },
});
