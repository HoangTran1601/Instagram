import React, {Component} from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';
import { View, Image } from 'react-native'
import UserGallery from '../components/user/UserGallery'
import PostList from '../components/post/PostList'

export default tabBar = TabNavigator({
  UserImage_Screen: {
    screen: () => <UserGallery onPressPostDetail={() => this.props.navigation.navigate('UserPostDetail_Screen')}/>
  },
  UserPost_Screen: {
    screen: PostList
  }
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'UserImage_Screen') {
        iconName = focused ?  require('../assets/img/image_icon_fill.png') : require('../assets/img/image_icon.png');
      } else if (routeName === 'UserPost_Screen') {
        iconName = focused ? require('../assets/img/post_icon_fill.png') : require('../assets/img/post_icon.png')
      }
      return <Image style={{width: 25, height: 25, tintColor: tintColor}}source={iconName} />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    showLabel: false,
    style: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(216,216,216)'
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'top',
  animationEnabled: false,
  swipeEnabled: false,
  showLabel: false
});

