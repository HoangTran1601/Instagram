import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView
} from 'react-native';
import UserHeader from '../components/user/UserHeader'
import UserGallery from '../components/user/UserGallery'
import UserInfo from '../components/user/UserInfo'
import TabNavigator from 'react-native-tab-navigator'
import PostList from '../components/post/PostList'
export default class App extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userHeader}>
          <UserHeader />
        </View>
        <View style={styles.userInfo}>
          <UserInfo />
        </View>
        <View style={styles.tabBar}>
        <TabNavigator tabBarStyle={styles.tabBarStyle}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            renderIcon={() => <Image style={styles.image} source={require('../assets/img/image_icon.png')} />}
            renderSelectedIcon={() => <Image style={styles.image} source={require('../assets/img/image_icon_fill.png')} />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            {<UserGallery />}
          </TabNavigator.Item>
          
          <TabNavigator.Item
            selected={this.state.selectedTab === 'add'}
            renderIcon={() => <Image style={styles.image} source={require('../assets/img/post_icon.png')} />}
            renderSelectedIcon={() => <Image style={styles.image} source={require('../assets/img/post_icon_fill.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'add' })}>
            {<PostList />}
          </TabNavigator.Item>
        </TabNavigator>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userHeader: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20
  },
  userInfo: {
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    width: 25,
    height: 25
  },
  tabBarStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white'
  },
  tabBar: {
    flex: 1,
    marginTop: 25
  }
});
