import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import MovieInfo from './MovieInfo'
import { openModal } from '../store/actions/';

class MovieList extends Component {

 state = {
   selectedItem: {}
 }

  itemSelectedHandler = key => {
    const selectedItem = this.props.movies.find(movie => {
      return movie.imdbID === key;
    });
  
    this.props.setModalStatus(!this.props.visible);
    this.setState({selectedItem});
  };

  render() {
    return (
      <View>
      <FlatList
        style={styles.moviesContainer}
        data={this.props.movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => (
          <MovieItem
            movieTitle={info.item.Title}
            movieImage={{ uri: info.item.Poster }}
            onItemPressed={() => this.itemSelectedHandler(info.item.imdbID)}
          />
        )}
      />
      <MovieInfo setModalStatus={this.props.setModalStatus} visible={this.props.visible} movie={this.state.selectedItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  moviesContainer: {
    width: '100%'
  }
});

const mapDispatchToProps = () => {
  return {
    openModal: item => openModal(item)
  };
};

export default connect(null, mapDispatchToProps)(MovieList);
