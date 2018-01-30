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
<<<<<<< HEAD
import CommentList from './src/components/comment/CommentList'
import UserHeader from './src/components/user/UserHeader'
export default class App extends Component<{}> {
  render() {
    return (
      <UserHeader />
=======
export default class App extends Component<{}> {
  render() {
    return (
      <Login />
>>>>>>> parent of 1822680... Done layout CommentList Component and test it in App.js
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 250
  }
});
