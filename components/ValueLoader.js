import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Loader from './Loader';

export default (ValueLoader = ({ value, max, ...loader }) => {
  const thign = `${value}/${max}`;
  const percentage = value / max * 100;
  return (
    <Loader value={percentage} {...loader}>
      <Text style={styles.text}>{thign}</Text>
    </Loader>
  );
});

const styles = StyleSheet.create({
  text: {
    fontFamily: 'expro-magic',
    color: 'white',
    fontSize: 10,
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
  },
});
