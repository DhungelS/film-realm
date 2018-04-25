import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'



class HomeScreen extends Component {
  render(){
    return(
      <View style={styles.homeContainer}>
        <Text>This is the home screen </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen;