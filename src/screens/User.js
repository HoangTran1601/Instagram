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
import UserInfo from '../components/user/UserInfo'
import TabNavigator from 'react-native-tab-navigator'
import PostList from '../components/post/PostList'
import UserImage from '../components/user/UserImage'
import Post from '../components/post/Post'
import UserTabbar from '../router/user_tabbar'

export default class User extends Component<{}> {
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
      // <View style={styles.container}>
      //   <FlatList 
      //     numColumns={3}
      //     onRefresh={this.scroll.bind(this)}
      //     refreshing={isLoading}
      //     onEndReachedThreshold={1}
      //     onEndReached={this.end.bind(this)}
      //     data={this.state.data}
      //     keyExtractor={item => item.key}
      //     ListHeaderComponent={this.renderHeader}
      //     renderItem={({item}) => <Post />}
      //   />
      // </View>
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.userHeader}>
            <UserHeader 
              amountPost="242"
              amountFollower="65.3K"
              amountFollowing="21"
            />
          </View>

          <View style={styles.userInfo}>
            <UserInfo 
              username="Ronal979"
              bio="Something will happen"
              website="www.never.com"
            />
          </View>
          <View style={styles.tabBar}>
            {/* <View style={styles.tabItem}>
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
            </View> */}
            <UserTabbar />
          </View>
        </View>
      </ScrollView>
    );
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    marginTop: 25,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center'
  }
});
