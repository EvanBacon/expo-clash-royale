import React from 'react';
import { View } from 'react-native';
export default ({ style, ...props }) => (
  <View style={[{ overflow: 'visible' }, style]} {...props} />
);
