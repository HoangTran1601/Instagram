import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import Comment from '../components/comment/Comment'
import CommentList from '../components/comment/CommentList'
export default class CommentPage extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <CommentList />
        <View style={styles.inputArea}>
          <TextInput 
            style={styles.input}
            placeholder="Add a comment..."  
          />
          <TouchableOpacity
            style={styles.postBtn}
          >
            <View>
              <Text style={styles.postText}>Post</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  inputArea: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'rgb(201,201,202)'
  },
  input: {
    flex: 7,
    marginRight: 15,
    paddingVertical: 5,
    fontSize: 15
  },
  postBtn: {
    flex: 1,
    marginLeft: 'auto',
  },
  postText: {
    fontSize: 15,
    color: 'rgb(60,148,217)',
    fontWeight: '700',
  }
});

