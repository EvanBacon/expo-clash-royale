import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { View } from '../differently-native';
import UpgradeLoader from './UpgradeLoader';
import CartoonText from './CartoonText';
import TouchableBounce from './TouchableBounce';

class TitleCell extends React.Component {
  get image() {
    const { image } = this.props;
    if (image) {
      return (
        <Image
          source={image}
          style={{
            aspectRatio: 1,
            resizeMode: 'contain',
          }}
        />
      );
    }
    return null;
  }

  get text() {
    const { title, titleStyle, subtitle, subtitleStyle, image } = this.props;

    return (
      <View
        style={{
          justifyContent: 'space-between',
          marginLeft: image && PADDING_HORIZONTAL,
        }}
      >
        <CartoonText style={[{ fontSize: 14 }, titleStyle]}>
          {title}
        </CartoonText>
        <CartoonText
          style={[{ color: '#FF9BFF', fontSize: 10 }, subtitleStyle]}
        >
          {subtitle}
        </CartoonText>
      </View>
    );
  }

  get info() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {this.image}
        {this.text}
      </View>
    );
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.info}
        {this.props.children}
      </View>
    );
  }
}

const PADDING_VERTICAL = 6;
const PADDING_HORIZONTAL = 10;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: PADDING_VERTICAL,
    borderRadius: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TitleCell;
