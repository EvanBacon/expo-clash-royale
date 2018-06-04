import React from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';
import TouchableBounce from './TouchableBounce';
import CartoonText from './CartoonText';

class SillyButton extends React.Component {
  render() {
    const { containerStyle, children, tintColor, ...props } = this.props;
    return (
      <TouchableBounce {...props}>
        <View
          style={[
            {
              borderRadius: 6,
              backgroundColor: tintColor,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
              paddingHorizontal: 16,
            },
            containerStyle,
          ]}
        >
          <CartoonText style={{ color: 'white', textAlign: 'center' }}>
            {children}
          </CartoonText>
        </View>
      </TouchableBounce>
    );
  }
}

export default SillyButton;
