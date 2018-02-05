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
export default class Post extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.postHeader, styles.postItemLayout]}>
          <PostHeader />
        </View>

        <View style={[styles.postImage]}>
          <PostImage />
        </View>

        <View style={[styles.postActivity, styles.postItemLayout]}>
          <PostActivity />
        </View>

        <View style={[styles.postInfo, styles.postItemLayout]}>
          <PostInfo />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10
  },
  postItemLayout: {
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15
  },
  postImage: {
    marginBottom: 15
  }
});

