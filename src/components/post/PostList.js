import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Button
} from 'react-native';
import Post from './Post'
export default class PostList extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'}
      ],
      isLoading: false,
      isFooterLoading: false
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
  renderFooter = () => {
    if (!this.state.isFooterLoading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large"/>
      </View>
    );
  };
  render() {
    const {isLoading} = this.state
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <FlatList
          onRefresh={this.scroll.bind(this)}
          refreshing={isLoading}
          onEndReachedThreshold={1}
          onEndReached={this.end.bind(this)}
          data={this.state.data}
          keyExtractor={item => item.key}
          ListFooterComponent={this.renderFooter}
          renderItem={({item}) => <Post onPress={() => navigate('Comment_Screen')}></Post>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});
