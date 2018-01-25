import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import PostList from './src/components/post/PostList'
import Swiper from 'react-native-swiper'
export default class App extends Component<{}> {
  render() {
    return (
      <PostList></PostList>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 250
  }
});
