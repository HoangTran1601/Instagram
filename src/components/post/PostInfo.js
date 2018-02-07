import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

export default class PostInfo extends Component<{}> {
  press () {
    alert('hi')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.spaceBetween}>
          <Text style={styles.like}>127 likes</Text>
        </View>
        <View style={styles.spaceBetween}>
          <Text>
            <Text style={styles.friendName}>cobicobi0811_</Text>
            <Text style={styles.status}>Gnite everyone .. chúc sớm chứ bảo mình ngủ giờ này thì trời sập 😅</Text>
          </Text>
        </View>
        <View style={styles.spaceBetween}>
          <Text 
            style={styles.comment}
            onPress={this.props.onPressComment}
          >
            View all 4 comments
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
