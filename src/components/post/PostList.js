import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.test}>
          <Text style={styles.text}>Post list</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
