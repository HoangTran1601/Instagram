import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class App extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      isPress: false
    }
  }
  handlePress () {
    this.setState({isPress: !this.state.isPress})
  }
  render() {
    const icon = this.state.isPress ? require('../../assets/img/heart-fill.png') : require('../../assets/img/heart-outline.png')
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.iconHeart}
          onPress={this.handlePress.bind(this)}
        >
            <Image 
              style={styles.imageHeart}
              source={icon}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image 
            style={styles.imageComment}
            source={require('../../assets/img/comment.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconHeart: {
    marginRight: 10
  },
  imageHeart: {
    width: 30,
    height: 30
  },
  imageComment: {
    width: 25,
    height: 25
  }
});
