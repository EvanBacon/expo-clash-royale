import React from 'react';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import AuthStateLayer from './AuthStateLayer';
import * as models from './models';
import '@expo/vector-icons';
import 'redux';
import Navigation from './Navigation';
import AssetUtils from 'expo-asset-utils';
import Assets from './Assets';
import { View } from './differently-native';
import { StatusBar } from 'react-native';
const store = init({
  models,
});

export default class App extends React.Component {
  state = { loading: true };

  get fonts() {
    let items = {};
    const keys = Object.keys(Assets.fonts || {});
    for (let key of keys) {
      const item = Assets.fonts[key];
      const name = key.substr(0, key.lastIndexOf('.'));
      items[name] = item;
    }
    return [items];
  }

  get files() {
    return [
      ...AssetUtils.arrayFromObject(Assets.images || {}),
      // ...AssetUtils.arrayFromObject(Assets.icons || {}),
      // ...AssetUtils.arrayFromObject(Assets.models || {}),
    ];
  }

  get audio() {
    return AssetUtils.arrayFromObject(Assets.audio);
  }

  async preloadAssets() {
    await AssetUtils.cacheAssetsAsync({
      fonts: this.fonts,
      files: this.files,
      // audio: this.audio,
    });
    this.setState({ loading: false });
  }

  componentWillMount() {
    this.preloadAssets();
    StatusBar.setBarStyle('light-content', false);
  }

  render() {
    return this.state.loading ? (
      <View style={{ backgroundColor: '#3C4A5C' }} />
    ) : (
      <View style={{ backgroundColor: '#3C4A5C', flex: 1 }}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </View>
    );
    // return (
    //   <Provider store={store}>
    //     <AuthStateLayer />
    //   </Provider>
    // );
  }
}
