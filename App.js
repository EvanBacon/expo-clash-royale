import React from 'react';
import { Provider } from 'react-redux'; // Version can be specified in package.json
import { init } from '@rematch/core'; // Version can be specified in package.json
import AuthStateLayer from './AuthStateLayer';
import * as models from './models';

import '@expo/vector-icons'; // Version can be specified in package.json
import 'redux'; // Version can be specified in package.json

const store = init({
  models,
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AuthStateLayer />
      </Provider>
    );
  }
}
