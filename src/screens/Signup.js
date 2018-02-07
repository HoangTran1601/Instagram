import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import PostList from '../components/post/PostList'
export default class Signup extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isDisabled: true
    }
  }

  handleLogin () {
    const {username, password} = this.state
    if (username !== '' && password !== '') {
      alert('hi')
    }
  }
  handleOnChange () {
    const {username, password} = this.state
    if (username !== '' && password !== '') {
      this.setState({isDisabled: false})
    } else {
      this.setState({isDisabled: true})
    }
    
  }
  render() {
    const { navigate } = this.props.navigation
    const { goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.titleText}>Name and Password</Text>
          <Text style={styles.subTitleText}>Add your name so friends can find you.</Text>
        </View>
        <View style={styles.loginArea}>
          <TextInput
            autoFocus={true}
            style={styles.input}
            onChangeText={ (username) => this.setState({username}) }
            value={this.state.username}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableWithoutFeedback
            disabled={this.state.isDisabled}
            onPress={this.handleLogin.bind(this)}
          >
            <View style={this.state.isDisabled ? styles.loginButtonDisabled : styles.loginButton}>
              <Text style={styles.loginText}>Sign up</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.signInRedirect}>
          <Text>
            <Text style={styles.subTitle}>Already have an account?</Text>
            <Text 
              style={styles.signUp}
              onPress={ () => goBack()}
            >
                Sign in
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    backgroundColor: 'white'
  },
  loginArea: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  titleArea: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 25,
    marginBottom: 20
  },
  subTitleText: {
    fontSize: 15
  },
  input: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'rgb(230,230,230)',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    marginBottom: 20
  },
  loginButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgb(59,149,234)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  loginButtonDisabled: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgb(154,204,243)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  },
  signInRedirect: {
    borderWidth: 1,
    borderColor: 'rgb(238,238,238)',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subTitle: {
    color: 'rgb(187,187,187)',
    fontSize: 15,
    fontWeight: '600'
  },
  signUp: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgb(76,141,196)',
  }
});
