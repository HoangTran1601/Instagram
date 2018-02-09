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
import UploadTabbar from '../router/upload_tabbar'
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
      <UploadTabbar />
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
