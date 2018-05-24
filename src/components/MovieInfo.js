import React from 'react';
import { connect } from 'react-redux';
import { Modal, View, Image, Text, Button } from 'react-native';
import { openModal } from '../store/actions/';

const MovieInfo = props => {
 
  console.log(props.movie.Poster)

  return (
    <Modal visible={props.visible}  onRequestClose={() => {
      alert('Modal has been closed.');
    }}>
      <View style={{justifyContent: 'center',
    alignItems: 'center'}}>
        <Image style={{width: 300, height: 300,  marginTop: 20}}  source={{uri: props.movie.Poster}} />
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{props.movie.Title}</Text>
        <Text style={{fontSize: 20}}>Release Date: {props.movie.Year}</Text>
        <View>
          <Button title="close" onPress={() => props.setModalStatus(!props.visible)} />
        </View>
      </View>
    </Modal>
  );
};


const mapStateToProps = state => {
  return {
    currentModalItem: state.modal.selectedItem
  };
};
export default connect(mapStateToProps, null)(MovieInfo);

