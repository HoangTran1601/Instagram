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

export default class Login extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isDisabled: true
    }
  }

  handleLogin () {
    const { navigate } = this.props.navigation
    const {username, password} = this.state
    if (username === 'Hoang' && password === '1') {
      navigate('Home_Screen')
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
    return (
      <View style={styles.container}>
        <View style={styles.logoArea}>
          <Image 
            style={styles.logoImg}
            source={require('../assets/img/Instagram_logo.svg.png')}
          />
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
            // disabled={this.state.isDisabled}
            onPress={this.handleLogin.bind(this)}
          >
            <View style={this.state.isDisabled ? styles.loginButtonDisabled : styles.loginButton}>
              <Text style={styles.loginText}>Login</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.signInRedirect}>
          <Text>
            <Text style={styles.subTitle}>Don't have an account?</Text>
            <Text 
              style={styles.signUp}
              onPress={ () => navigate('Signup_Screen')}
            >  
              Sign up
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
    backgroundColor: 'white'
  },
  logoArea: {
    backgroundColor: 'rgb(34,114,166)',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  loginArea: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  input: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'rgb(227,227,227)',
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
    fontWeight: '600',
    marginRight: 20
  },
  signUp: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgb(76,141,196)'
  }
});
