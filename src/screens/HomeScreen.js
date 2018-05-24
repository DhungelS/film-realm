import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.headingText}>Welcome to your to go source for movies. </Text>
        <Image style={styles.logoStyle} source={require('../images/logo.jpg')}/>
        </View>
         <View style={styles.buttonStyle}>
      
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headingText: {
    fontSize: 20,
    margin: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonStyle: {
    margin: 10,
    padding: 5
  },
  logoStyle: {
    width: 200,
    height: 200,
    borderRadius: 25
  }
});

export default HomeScreen;
