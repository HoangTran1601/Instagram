import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper'
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
    const icon = this.state.isPress ? require('../../assets/img/heart-fill.png') : require('../../assets/img/heart-outline-2.png')
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Image 
            style={styles.avatarImage}
            source={{uri: 'https://4.bp.blogspot.com/-yQKpqQwDcl8/VtGPQvOIELI/AAAAAAAAADI/8y3ggoxFXOE/s1600/25-anh-bikini-dep-Cho-Min-Yeong-23.jpg'}}
          />
        </View>
        <View style={styles.commentContent}>
          <View style={styles.text}>
            <Text style={styles.username}>HoangTran1996</Text>
          </View>
          <Text style={styles.comment}>What upppp ??What upppp ?</Text>
          <View style={styles.likeAmount}>
            <Text style={styles.likeAmountText}>1 Like</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.like}
          onPress={this.handlePress.bind(this)}
        >
          <Image 
            style={styles.likeImage}
            source={icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20
  },
  commentContent: {
    flex: 4
  },
  like: {
    flex: 1,
    marginTop: 15
  },
  likeImage: {
    marginLeft: 'auto',
    width: 25,
    height: 25
  },
  username: {
    fontSize: 14,
    fontWeight: '600'
  },
  comment: {
    fontSize: 14
  },
  likeAmount: {
    marginTop: 10
  },
  likeAmountText: {
    color: 'rgb(168,168,168)',
    fontSize: 15,
    fontWeight: '600'
  }
});
