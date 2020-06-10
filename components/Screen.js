import React from 'react';

import { View } from 'react-native';
import isIphoneX, { paddingTop } from '../utils/isIphoneX';

class Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'navy', paddingTop: 0 }}>
        {this.props.children}
      </View>
    );
  }
}
export default Screen;
