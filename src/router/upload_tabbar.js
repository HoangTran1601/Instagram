import React, {Component} from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';
import { View, Image } from 'react-native'
import AllowAccess from '../components/upload_post/allow_acces/AllowAccess'

export default tabBar = TabNavigator({
  Library: {
    screen: () => <AllowAccess
                    header="Library"
                    title="Plese Allow Access to Your Photos"
                    description="This allows Instagram to share photos from your library and save photos to your camera roll"
                    enable="Enable Library Access"
                  />
  },
  Photo: {
    screen: () => <AllowAccess 
                    header="Photos"
                    title="Take Photos With Instagram"
                    description="Allow access to your camera to start talking photos with the Instagram app."
                    enable="Enable Camera Access"
                  />
  },
  Video: {
    screen: () => <AllowAccess
                    header="Video"
                    title="Take Photos With Instagram"
                    description="Allow access to your camera to start talking photos with the Instagram app."
                    enable="Enable Camera Access"
                  />
  }
},
{
  navigationOptions: ({ navigation }) => {
    tabBarVisible: false
  },
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    showLabel: true,
    labelStyle: {
      fontSize: 15,
      lineHeight: 35,
      fontWeight: '600'
    },
    style: {
      backgroundColor: '#fff',
      height: 35
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true
});