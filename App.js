import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import {Provider} from 'react-redux';

import configureStore from './src/store/configureStore';

import HomeScreen from './src/screens/HomeScreen';
import MoviesScreen from './src/screens/MoviesScreen';

const store = configureStore();

const RootNavigator = TabNavigator({
  Home:{
    screen: HomeScreen
  },
  Movies: {
    screen: MoviesScreen
  }
}, {tabBarOptions:{style:{backgroundColor: 'purple'}}})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <RootNavigator/>
      </Provider>
    );
  }
}


