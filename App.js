import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import Home from './src/screens/Home'
import Signup from './src/screens/Signup'
import Login from './src/screens/Login'
import CommentList from './src/components/comment/CommentList'
export default class App extends Component<{}> {
  render() {
    return (
      <CommentList />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 250
  }
});
