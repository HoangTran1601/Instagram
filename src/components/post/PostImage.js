import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Swiper from 'react-native-swiper'
export default class PostImage extends Component<{}> {
  press () {
    alert('hi')
  }
  render() {
    return (
      <View style={styles.height}>
        <Swiper style={styles.height}>
          <TouchableWithoutFeedback 
            onPress={this.press}
          >
            <Image 
              style={styles.image}
              source={{uri: 'https://i.amz.mshcdn.com/Yy8JFH_XEGoLxWL9XLmXwQcG470=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F696229%2Fde70f3c0-f660-46f3-a5c0-649c3fb50a75.jpg'}}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback 
            onPress={this.press}
          >
            <Image 
              style={styles.image}
              source={{uri: 'https://i.amz.mshcdn.com/Yy8JFH_XEGoLxWL9XLmXwQcG470=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F696229%2Fde70f3c0-f660-46f3-a5c0-649c3fb50a75.jpg'}}
            />
          </TouchableWithoutFeedback>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  height: {
    height: 250
  },
  image: {
    height: 250
  }
});
