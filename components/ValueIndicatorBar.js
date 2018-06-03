import React from 'react';
import { StyleSheet } from 'react-native';

import Assets from '../Assets';
import ValueIndicator from '../components/ValueIndicator';
import { View } from '../differently-native';
import { LinearGradient } from 'expo';

class ValueIndicatorBar extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <LinearGradient
        colors={['black', 'transparent']}
        style={styles.container}
      >
        {items.map((item, index) => <ValueIndicator {...item} key={index} />)}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingBottom: 8,
    paddingTop: 38,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default ValueIndicatorBar;
