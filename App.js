import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Post from './src/components/post/Post'
import Swiper from 'react-native-swiper'
export default class App extends Component<{}> {
  render() {
    return (
      <Post></Post>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 250
  }
});
