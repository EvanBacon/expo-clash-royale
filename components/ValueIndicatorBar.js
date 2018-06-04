import React from 'react';
import { StyleSheet } from 'react-native';

import Assets from '../Assets';
import ValueIndicator from '../components/ValueIndicator';
import { View } from '../differently-native';
import { LinearGradient } from 'expo';

class ValueIndicatorBar extends React.Component {
  get items() {
    return this.props.items.map((item, index) => (
      <ValueIndicator {...item} key={index} />
    ));
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {this.items}
      </View>
    );
    // return (
    //   <LinearGradient
    //     colors={['black', 'transparent']}
    //     style={styles.container}
    //   >
    //     {}
    //   </LinearGradient>
    // );
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
