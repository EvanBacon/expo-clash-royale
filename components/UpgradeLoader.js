import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../differently-native';
import UpgradeIcon from './UpgradeIcon';
import ValueLoader from './ValueLoader';

export default (UpgradeLoader = ({
  style,
  tint,
  loader: { style: loaderStyle, ...loader },
  icon,
}) => (
  <View style={[styles.container, style]}>
    <UpgradeIcon style={styles.icon} color={tint} {...icon} />
    <ValueLoader offset={3} style={loaderStyle} tint={tint} {...loader} />
  </View>
));

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'flex-end' },
  icon: {
    zIndex: 1,
    position: 'absolute',
    left: -8,
    bottom: -2,
    height: 23,
    width: 26,
    aspectRatio: 1,
    resizeMode: 'stretch',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
