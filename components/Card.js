import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { View } from '../differently-native';
import UpgradeLoader from './UpgradeLoader';
import CartoonText from './CartoonText';

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
      tint,
      nextLevel: { max, value },
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
          <Text style={styles.level}>Level {level}</Text>
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
  },
  container: {
    borderRadius: 6,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  imageContainer: {
    borderRadius: 8,
    borderWidth: 5,
    borderColor: 'rgba(255,255,255,0.4)',
    overflow: 'hidden',
    height: 128,
    aspectRatio: 3 / 4,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  level: {
    position: 'absolute',
    bottom: 0,
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
