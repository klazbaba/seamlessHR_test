/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import React from 'react';

import App from './src/App';
import {name as appName} from './app.json';
import Store from './src/store';

const SeamlessHR = () => (
  <Provider store={Store()}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => SeamlessHR);
