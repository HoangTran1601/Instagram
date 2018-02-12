import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types';

export default class PostInfo extends Component<{}> {
  press () {
    alert('hi')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.spaceBetween}>
          <Text style={styles.like}>{this.props.totalLike} likes</Text>
        </View>
        <View style={styles.spaceBetween}>
          <Text>
            <Text style={styles.friendName}>{this.props.friendName}</Text>
            <Text style={styles.status}>{this.props.status}</Text>
          </Text>
        </View>
        <View style={styles.spaceBetween}>
          <Text 
            style={styles.comment}
            onPress={this.props.onPressComment}
          >
            View all {this.props.totalComment} comments
          </Text>
        </View>
        <View>
          <Text style={styles.postedTime}>34 MINUTE AGO</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  like: {
    fontWeight: '700',
    fontSize: 14,
  },
  friendName: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18
  },
  status: {
    fontSize: 14,
    lineHeight: 18
  },
  comment: {
    color: 'rgb(174,174,175)',
    fontWeight: '600',
    fontSize: 16
  },
  postedTime: {
    color: 'rgb(174,174,175)',
    fontWeight: '600',
    fontSize: 12
  },
  spaceBetween: {
    marginBottom: 8
  }
});

PostInfo.propTypes = {
  onPressComment: PropTypes.func,
  friendName: PropTypes.string,
  status: PropTypes.string,
  totalComment: PropTypes.number,
  totalLike: PropTypes.number
}
