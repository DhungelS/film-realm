import React, {Component} from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/index';

class MovieInput extends Component {
  state = {
    movieName: ''
  };

  movieNameChangedHandler = val => {
    this.setState({
      movieName: val
    });
  };

  searchMovieHandler = () => {
    this.props.fetchMovies(this.state.movieName);
  };

  render() {
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search for a movie"
            value={this.state.movieName}
            onChangeText={this.movieNameChangedHandler}
            style={styles.movieInput}
          />
          <Button
            title="Submit"
            style={styles.searchButton}
            color="#841584"
            onPress={this.searchMovieHandler}
          />
        </View>
        <View style={styles.resultContainer}>
          <MovieList movies={this.props.movies} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '95%'

  },
  movieInput: {
    width: '70%',
    marginLeft: '5%'

  },
  searchButton: {
    width: '30%'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: query => dispatch(getMovies(query))
  };
};

const mapStateToProps = state => {
  return {
    movies: state.movies.currentMovies
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInput);
