import React, { Component } from 'react';
import {  StyleSheet, View, Text, Image, TouchableWithoutFeedback, FlatList, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width

export default class App extends Component <{}> {
  handlePress () {
    alert('hi')
  }
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'Devin1'},
        {key: 'Jackson1'},
        {key: 'James1'},
        {key: 'Joel1'}
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
    return (
      <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        onRefresh={this.scroll.bind(this)}
        refreshing={this.state.isLoading}
        onEndReachedThreshold={1}
        onEndReached={this.end.bind(this)}
        data={this.state.data}
        keyExtractor={item => item.key}
        numColumns={3}
      // ListFooterComponent={this.renderFooter}
        renderItem={({item}) =>       
          <TouchableWithoutFeedback>
            <Image 
              style={styles.image}
              source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F588407810%2F960x0.jpg%3Ffit%3Dscale'}}
            />
          </TouchableWithoutFeedback>
        }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: -1
  },
  list: {
    justifyContent: 'space-between',
  },
  image: {
    height: WIDTH / 3,
    width: WIDTH / 3,
    marginLeft: 1,
    marginBottom: 1
  }
});
