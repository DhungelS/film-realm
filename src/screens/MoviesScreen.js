import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MovieInput from '../components/MovieInput'

class MoviesScreen extends Component {
  render() {
    return (
      <View>
        <MovieInput/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MoviesScreen;
