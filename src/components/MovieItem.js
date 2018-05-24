import React from 'react'
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const MovieItem = props => {
  return (
    <TouchableOpacity onPress={props.onItemPressed} >
      <View style={styles.movieItem}>
        <Image
          resizeMode="cover"
          source={props.movieImage}
          style={styles.movieImage}
        />
        <Text>{props.movieTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  movieImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default MovieItem;
