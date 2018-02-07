import React, {Component} from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';
import { Image } from 'react-native'

import Login from '../screens/Login'
import Signup from '../screens/Signup';
import Home from '../screens/Home'
import UploadPost from '../screens/UploadPost'
import User from '../screens/User'
import PostList from '../components/post/PostList'
import CommentPage from '../screens/CommentPage'
const tabBar = TabNavigator({
  NewFeed_Screen: {
    screen: PostList
  },
  User_Screen: {
    screen: User
  }
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'NewFeed_Screen') {
        iconName = require('../assets/img/home-filled.png');
      } else if (routeName === 'UpLoadPost_Screen') {
        iconName = require('../assets/img/add-filled.png')
      } else if (routeName === 'User_Screen') {
        iconName = require('../assets/img/customer-filled.png');
      }
      return <Image style={{width: 25, height: 25, tintColor: tintColor}}source={iconName} />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    showLabel: false
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  showLabel: false
});

export default App = StackNavigator({
  Home: {
    screen: tabBar
  },
  UpLoadPost_Screen: {
    screen: UploadPost
  },
  Comment_Screen: {
    screen: CommentPage,
    navigationOptions: {
      title: 'Comments'
    }
  }
});
