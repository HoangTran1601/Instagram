import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import UserHeader from '../components/user/UserHeader'
import UserGallery from '../components/user/UserGallery'
import UserInfo from '../components/user/UserInfo'
import TabNavigator from 'react-native-tab-navigator'
import PostList from '../components/post/PostList'
import UserImage from '../components/user/UserImage'

export default class App extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Devin1'},
        {key: 'Jackson1'},
        {key: 'James1'},
        {key: 'Devin2'},
        {key: 'Jackson2'},
        {key: 'James2'},
        {key: 'Devin3'},
        {key: 'Jackson3'},
        {key: 'James3'},
        {key: 'Devin3'},
        {key: 'Jackson4'},
        {key: 'James4'},
      ],
      isLoading: false,
      isFooterLoading: false,
      selectedTab: 'home'
    }
  }
  scroll () {
    this.setState({isLoading: true})
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 4000)
  }

  end () {
    // alert('ngan')
    this.setState({isFooterLoading: true})
    setTimeout(() => {
      this.setState({isFooterLoading: false})
    }, 4000)
  }
  renderHeader = () => {
    // if (!this.state.isFooterLoading) return null;

    return (
      <View>
        <View style={styles.userHeader}>
          <UserHeader />
        </View>

        <View style={styles.userInfo}>
          <UserInfo />
        </View>
        <View style={styles.tabBar}>
          <View style={styles.tabItem}>
            <TouchableWithoutFeedback>
              <Image
                style={styles.icon}
                source={require('../assets/img/image_icon.png')}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.tabItem}>
            <TouchableWithoutFeedback>
              <Image
                style={styles.icon}
                source={require('../assets/img/post_icon.png')}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  };
  render() {
    const {isLoading} = this.state
    return (
      <View style={styles.container}>
        <FlatList 
          numColumns={3}
          onRefresh={this.scroll.bind(this)}
          refreshing={isLoading}
          onEndReachedThreshold={1}
          onEndReached={this.end.bind(this)}
          data={this.state.data}
          keyExtractor={item => item.key}
          ListHeaderComponent={this.renderHeader}
          renderItem={({item}) => <UserImage />}
        />
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
  icon: {
    width: 25,
    height: 25
  },
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 25,
    borderColor: 'rgb(240,240,240)',
    borderTopWidth: 1
  },
  tabItem: {
    flex: 1,
    alignItems: 'center'
  }
});
