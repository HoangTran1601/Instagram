import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width

export default class UserImage extends Component<{}> {
  render() {
    return (
      <TouchableWithoutFeedback>
        <Image 
          style={styles.image}
          source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F588407810%2F960x0.jpg%3Ffit%3Dscale'}}
        />
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: WIDTH / 3 ,
    width: WIDTH / 3 ,
    marginLeft: 1,
    marginBottom: 1
  },
});

