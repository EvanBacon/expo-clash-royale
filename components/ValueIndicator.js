import React from 'react';
import { Image, StyleSheet } from 'react-native';

import CartoonText from '../components/CartoonText';
import { View } from '../differently-native';

class ValueIndicator extends React.PureComponent {
  render() {
    const { value, tint, image } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bar} />
        <CartoonText style={{ color: tint }}>{value}</CartoonText>
        <View style={[styles.imageContainer, { backgroundColor: tint }]}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    // flex: 1,
    paddingHorizontal: 8,
    width: '30%',
  },
  bar: {
    position: 'absolute',
    top: 4,
    bottom: 4,
    left: 0,
    right: 12,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#10171E',
  },
  image: {
    tintColor: '#10171E',
    resizeMode: 'contain',
    flex: 1,
  },
  imageContainer: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    maxWidth: 35,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default ValueIndicator;
