import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { View } from '../differently-native';
import UpgradeLoader from './UpgradeLoader';
import CartoonText from './CartoonText';
import TouchableBounce from './TouchableBounce';
import BounceResizeButton from './BounceResizeButton';
import Assets from '../Assets';
import DopeButtonImage from './DopeButtonImage';

export default class Card extends React.Component {
  renderEmpty = () => (
    <View style={styles.emptyCardContainer}>
      <CartoonText style={{ fontSize: 12, textAlign: 'center' }}>
        Card Slot
      </CartoonText>
    </View>
  );

  renderContents = () => {
    const {
      level,
      image,
      onPress,
      tint,
      nextLevel: { max, value },
    } = this.props;
    return (
      <TouchableBounce>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
            <Text style={styles.level}>Level {level}</Text>
            <DopeButtonImage
              style={StyleSheet.absoluteFill}
              source={Assets.images.rims['light.png']}
            />
          </View>

          <UpgradeLoader
            tint={tint}
            loader={{
              style: { marginTop: 4 },
              value,
              max,
            }}
          />
        </View>
      </TouchableBounce>
    );
  };
  render() {
    return this.props.level ? this.renderContents() : this.renderEmpty();
  }
}

const styles = StyleSheet.create({
  emptyCardContainer: {
    borderRadius: 6,
    opacity: 0.5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 128,
    aspectRatio: 3 / 4,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  container: {
    borderRadius: 6,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  imageContainer: {
    overflow: 'hidden',
    height: 128,
    aspectRatio: 3 / 4,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 12,
    margin: 6,
  },
  level: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    color: '#A4CBFB',
    backgroundColor: 'rgba(0,0,0,0.4)',
    textAlign: 'center',
    paddingVertical: 2,
    fontSize: 10,
    fontFamily: 'expro-magic',
  },
});
