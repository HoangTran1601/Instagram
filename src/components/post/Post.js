import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import PostHeader from './PostHeader'
import PostActivity from './PostActivity'
import PostImage from './PostImage'
import PostInfo from './PostInfo'
export default class App extends Component<{}> {
  render() {
    return (
      <View >
        <PostHeader />
        <PostImage />
        <PostActivity />
        <PostInfo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

