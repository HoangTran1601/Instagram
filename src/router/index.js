import React, {Component} from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';
import { View, Image } from 'react-native'

import Login from '../screens/Login'
import Signup from '../screens/Signup';
import Home from '../screens/Home'
import UploadPost from '../screens/UploadPost'
import User from '../screens/User'
import PostList from '../components/post/PostList'
import CommentPage from '../screens/CommentPage'

const NewsFeedNavigation = StackNavigator({
  PostList_Screen: {
    screen: PostList,
    navigationOptions: {
      headerTitle: <Image style={{height: 35, width: 120}}source={require('../assets/img/Instagram_logo.svg.png')}/>
    }
  },
  Friend_Screen: {
    screen: User,
    navigationOptions: {
      headerTintColor: '#000'
    }
  }
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#fff'
    }
  }
})

const tabBar = TabNavigator({
  NewFeed_Screen: {
    screen: NewsFeedNavigation,
    navigationOptions: {
      header: null
    }
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
},
{
  navigationOptions: {
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#fff',
    }
  }
});
