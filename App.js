import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import MoviesScreen from './src/screens/MoviesScreen'

const RootNavigator = TabNavigator({
  Home:{
    screen: HomeScreen
  },
  Movies: {
    screen: MoviesScreen
  }
})

export default class App extends Component {
  render() {
    return (
      <RootNavigator/>
    );
  }
}


