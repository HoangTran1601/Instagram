import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import UserImage from './UserImage'
export default class UserGallery extends Component<{}> {
  constructor(props) {
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
      ]
    };
  };
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          numColumns={3}
          // onRefresh={this.scroll.bind(this)}
          // refreshing={isLoading}
          // onEndReachedThreshold={1}
          // onEndReached={this.end.bind(this)}
          data={this.state.data}
          keyExtractor={item => item.key}
          // ListHeaderComponent={this.renderHeader}
          renderItem={({item}) => <UserImage />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
