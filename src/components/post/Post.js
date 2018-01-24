import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import PostHeader from './PostHeader'
import PostActivity from './PostActivity'
import PostImage from './PostImage'
export default class App extends Component<{}> {
  render() {
    return (
      <View >
        <PostHeader />
        <PostImage />
        <PostActivity />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

