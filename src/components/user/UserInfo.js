import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default class UserInfo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.username}>{this.props.username}</Text>
        </View>
        <View>
          <Text style={styles.bio}>{this.props.bio}</Text>
        </View>
        <View>
          <Text style={styles.website}>{this.props.website}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  username: {
    fontWeight:'600',
    fontSize: 15
  },
  bio: {
    fontSize: 15,
    lineHeight: 20
  },
  website: {
    fontSize: 15,
    color: 'rgb(0,0,238)',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgb(0,0,238)'
  }
});

UserInfo.propTypes = {
  username: PropTypes.string,
  bio: PropTypes.string,
  website: PropTypes.string
}