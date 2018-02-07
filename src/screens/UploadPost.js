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
export default class UploadPost extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'library'
    }
  }
  handleOnPress (tabTitle) {
    this.setState({ selectedTab: tabTitle })
    this.props.navigation.navigate('UploadPost')
  }
  render() {
    return (
      <View style={styles.container}>
      <TabNavigator tabBarStyle={styles.tabBarStyle}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'library'}
          title="Library"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          onPress={() => this.setState({ selectedTab: 'library'})}>
          {
            <AllowAccess
              header="Library"
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
              header="Photos"
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
              header="Video"
              title="Take Photos With Instagram"
              description="Allow access to your camera to start talking photos with the Instagram app."
              enable="Enable Camera Access"
          />
          }
        </TabNavigator.Item>
      </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: '#000',
    height: 35,
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleStyle: {
    fontSize: 16,
    color: 'rgb(142,142,142)',
    textAlign: 'center'
  },
  selectedTitleStyle: {
    color: '#000'
  }
});
