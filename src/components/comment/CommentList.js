import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import Comment from './Comment'
export default class App extends Component<{}> {

  render() {
    return (
      <ScrollView>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
