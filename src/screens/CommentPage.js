import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Comment from '../components/comment/Comment'
import CommentList from '../components/comment/CommentList'
export default class CommentPage extends Component<{}> {
  constructor(props) {
    super(props)
  
    this.state = {
      listComment: [
         {content: `What's up everybodyyyy ???`, username: 'HoangTran1601', amountLike: 2},
         {content: `What's up everybodyyyy ???`, username: 'NganBui 0903', amountLike: 2},
         {content: `What's up everybodyyyy ???`, username: 'Ronaldo', amountLike: 2},
         {content: `What's up everybodyyyy ???`, username: 'Messi', amountLike: 2},
         {content: `What's up everybodyyyy ???`, username: 'William', amountLike: 2},
         {content: `What's up everybodyyyy ???`, username: 'Pharell', amountLike: 2},
         {content: `What's up everybodyyyy ???`, username: 'Nadal', amountLike: 2},
         {content: `What's up everybodyyyy ???`, username: 'HoangTran1601', amountLike: 2},
         {content: `What's up everybodyyyy ???`, username: 'HoangTran1601', amountLike: 2},
         {content: `What's up everybodyyyy ???`, username: 'HoangTran1601', amountLike: 2},
         {content: `What's up everybodyyyy ???`, username: 'HoangTran1601', amountLike: 2},
       ]
    };
  };
  
  render() {
    const listItems = this.state.listComment.map((comment, index) =>
      <Comment 
        content={comment.content}
        username={comment.username}
        amountLike={comment.amountLike}
        key={index}
      />
    );
    return (
      <View style={styles.container}>
        {/* <CommentList /> */}
        <ScrollView>
          {listItems}
        </ScrollView>
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
    paddingVertical: 13,
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

