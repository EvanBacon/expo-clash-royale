import React from 'react';
import { ImageBackground } from 'react-native';
export default ({ style, ...props }) => (
  <ImageBackground style={[style, { overflow: 'hidden' }]} {...props} />
);
