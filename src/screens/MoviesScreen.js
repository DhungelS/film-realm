import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MoviesScreen extends Component {
  render() {
    return (
      <View style={styles.movieContainer}>
        <Text>This is the movie screen </Text>
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
