import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader'
import PostActivity from './PostActivity'
import PostImage from './PostImage'
import PostInfo from './PostInfo'

export default class Post extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.postHeader, styles.postItemLayout]}>
          <PostHeader onPressFriendName={this.props.onPressFriendName}/>
        </View>

        <View style={[styles.postImage]}>
          <PostImage />
        </View>

        <View style={[styles.postActivity, styles.postItemLayout]}>
          <PostActivity onPressComment={this.props.onPressComment}/>
        </View>

        <View style={[styles.postInfo, styles.postItemLayout]}>
          <PostInfo 
            onPressComment={this.props.onPressComment}
            totalLike={127}
            status="Gnite everyone .. chúc sớm chứ bảo mình ngủ giờ này thì trời sập 😅"
            totalComment={34}
            friendName="cobicobi0811_"
          />
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


Post.propTypes = {
  onPressFriendName: PropTypes.func,
  onPressComment: PropTypes.func
}
