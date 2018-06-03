import React from 'react';
import { Text } from 'react-native';
export default ({ style, ...props }) => (
  <Text
    style={[
      {
        fontFamily: 'expro-magic',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 3 },
        color: 'white',
      },
      style,
    ]}
    {...props}
  />
);
