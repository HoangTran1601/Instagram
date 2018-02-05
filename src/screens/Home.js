import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import PostList from '../components/post/PostList'
import User from './User'
import UploadPost from './UploadPost'
export default class Home extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }
  press () {
    alert('hi')
  }
  render() {
    return (
      <TabNavigator tabBarStyle={styles.tabBarStyle}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          renderIcon={() => <Image style={styles.image} source={require('../assets/img/home.png')} />}
          renderSelectedIcon={() => <Image style={styles.image} source={require('../assets/img/home-filled.png')} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {<PostList/>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'add'}
          renderIcon={() => <Image style={styles.image} source={require('../assets/img/add.png')} />}
          renderSelectedIcon={() => <Image style={styles.image} source={require('../assets/img/add-filled.png')} />}
          // renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'add' })}>
          {<UploadPost />}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'heart'}
          renderIcon={() => <Image style={styles.image} source={require('../assets/img/heart.png')} />}
          renderSelectedIcon={() => <Image style={styles.image} source={require('../assets/img/heart-filled.png')} />}
          onPress={() => this.setState({ selectedTab: 'heart' })}>
          {<Text>Ngan</Text>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          renderIcon={() => <Image style={styles.image} source={require('../assets/img/customer.png')} />}
          renderSelectedIcon={() => <Image style={styles.image} source={require('../assets/img/customer-filled.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {<User/>}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25
  },
  tabBarStyle: {
    backgroundColor: '#fafafa'
  }
});
