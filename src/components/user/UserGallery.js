import React, { Component } from 'react';
import {  StyleSheet, View, Text, Image, TouchableWithoutFeedback  } from 'react-native';
import { Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width
export default class App extends Component <{}> {
  handlePress () {
    alert('hi')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress.bind(this)}>
        <Image 
          style={styles.image}
          source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F588407810%2F960x0.jpg%3Ffit%3Dscale'}}
        />
        </TouchableWithoutFeedback>
        <Image 
          style={styles.image}
          source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F588407810%2F960x0.jpg%3Ffit%3Dscale'}}
        />
        <Image 
          style={styles.image}
          source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F588407810%2F960x0.jpg%3Ffit%3Dscale'}}
        />
        <Image 
          style={styles.image}
          source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F588407810%2F960x0.jpg%3Ffit%3Dscale'}}
        />
        <Image 
          style={styles.image}
          source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F588407810%2F960x0.jpg%3Ffit%3Dscale'}}
        />
        <Image 
          style={styles.image}
          source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F588407810%2F960x0.jpg%3Ffit%3Dscale'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    height: WIDTH / 3 - 1,
    width: WIDTH / 3 - 1,
    marginBottom: 1
  }
});
