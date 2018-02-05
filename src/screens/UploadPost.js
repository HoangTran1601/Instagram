import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import AllowAccess from '../components/upload_post/allow_acces/AllowAccess'
import TabNavigator from 'react-native-tab-navigator'
export default class App extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'library'
    }
  }
  render() {
    return (
      <TabNavigator tabBarStyle={styles.tabBarStyle}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'library'}
          title="Library"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          onPress={() => this.setState({ selectedTab: 'library' })}>
          {
            <AllowAccess 
              title="Plese Allow Access to Your Photos"
              description="This allows Instagram to share photos from your library and save photos to your camera roll"
              enable="Enable Library Access"
            />
          }
        </TabNavigator.Item>
        
        <TabNavigator.Item
          selected={this.state.selectedTab === 'photo'}
          title="Photo"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          onPress={() => this.setState({ selectedTab: 'photo' })}>
          {
            <AllowAccess 
              title="Take Photos With Instagram"
              description="Allow access to your camera to start talking photos with the Instagram app."
              enable="Enable Camera Access"
            />
          }
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'video'}
          title="Video"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          onPress={() => this.setState({ selectedTab: 'video' })}>
          {
            <AllowAccess 
              title="Take Photos With Instagram"
              description="Allow access to your camera to start talking photos with the Instagram app."
              enable="Enable Camera Access"
          />
          }
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: '#000',
    height: 35,
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleStyle: {
    fontSize: 15,
    color: 'rgb(142,142,142)',
    textAlign: 'center'
  },
  selectedTitleStyle: {
    color: '#000'
  }
});
