import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import Post from '../components/post/Post'
export default class Login extends Component<{}> {
  
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Post
          onPressComment={() => navigate('Comment_Screen')}
          onPressFriendName={() => navigate('Friend_Screen')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
