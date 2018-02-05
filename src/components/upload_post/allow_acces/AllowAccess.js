import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
          <Text style={styles.enable}>{this.props.enable}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    color: 'rgb(142,142,142)',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20
  },
  description: {
    fontSize: 15,
    color: 'rgb(142,142,142)',
    textAlign: 'center',
    marginBottom: 30
  },
  enable: {
    fontSize: 15,
    color: 'rgb(0,0,238)',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgb(0,0,238)',
    textAlign: 'center'
  }
});

