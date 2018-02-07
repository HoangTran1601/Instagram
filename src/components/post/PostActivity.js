import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class PostActivity extends Component<{}> {
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
    const icon = this.state.isPress ? require('../../assets/img/heart-fill.png') : require('../../assets/img/heart-outline-2.png')
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
        <TouchableOpacity 
          style={styles.icon}
          onPress={this.props.onPressComment}>
          <Image 
            style={styles.imageComment}
            source={require('../../assets/img/test.png')}
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
    width: 32,
    height: 32
  },
  imageComment: {
    width: 22,
    height: 22
  }
});
