import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default class PostHeader extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.avatar}
          source={{uri: 'https://thumbor.forbes.com/thumbor/1280x868/smart/https%3A%2F%2Fblogs-images.forbes.com%2Fsteveolenski%2Ffiles%2F2017%2F10%2Fsmart_city.jpg'}}
        />
        <TouchableOpacity 
          style={styles.friendName}
          onPress={this.props.onPressFriendName}
        >
          <Text>Hoang</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.more}>
          <Image
            style={styles.imgMore}
            source={require('../../assets/img/more.png')}
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
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 15
  },
  more: {
    marginLeft: 'auto'
  },
  imgMore: {
    height: 35,
    width: 35
  }
});

PostHeader.propTypes = {
  onPressFriendName: PropTypes.func
}