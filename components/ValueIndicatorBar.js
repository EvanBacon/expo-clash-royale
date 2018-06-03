import React from 'react';
import { StyleSheet } from 'react-native';

import Assets from '../Assets';
import ValueIndicator from '../components/ValueIndicator';
import { View } from '../differently-native';

class ValueIndicatorBar extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <View style={styles.container}>
        {items.map((item, index) => <ValueIndicator {...item} key={index} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default ValueIndicatorBar;
