import React from 'react';
import { ImageBackground } from '../differently-native';
import Assets from '../Assets';
export default ({ style, ...props }) => (
  <ImageBackground
    style={[
      style,
      {
        width: '100%',
        borderTopWidth: 2,
        borderTopColor: 'rgba(255,255,255,0.6)',
        borderBottomWidth: 5,
        borderBottomColor: 'rgba(0,0,0,0.3)',
      },
    ]}
    {...props}
    source={Assets.images.textures['wood.jpg']}
  />
);
