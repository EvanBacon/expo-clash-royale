import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

class TouchableBounce extends React.Component {
  static defaultProps = {
    activeOpacity: 0.7,
  };
  scale = new Animated.Value(1);

  bounceTo = (
    value: number,
    velocity: number,
    bounciness: number,
    callback?: ?Function,
  ) => {
    this.scale.stopAnimation();
    Animated.spring(this.scale, {
      toValue: value,
      velocity,
      bounciness,
    }).start(callback);
  };

  onPressIn = e => {
    // this.bounceTo(0.93, 0.1, 0);
    this.props.onPressIn && this.props.onPressIn(e);
  };

  onPressOut = e => {
    // this._onPressOutBounce();
    this.props.onPressOut && this.props.onPressOut(e);
  };

  onPress = e => {
    // this._onPressOutBounce();
    this.props.onPress && this.props.onPress(e);
  };

  _onPressOutBounce = () =>
    this.bounceTo(1, 0.1, 1, this.props.onPressAnimationComplete);

  render() {
    const { style, ...props } = this.props;
    return (
      <AnimatedTouchable
        {...props}
        style={[{ transform: [{ scale: this.scale }] }, style]}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onPress={this.onPress}
      />
    );
  }
}

export default TouchableBounce;
