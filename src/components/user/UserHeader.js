import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
export default class UserHeader extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageArea}>
          <Image 
             style={styles.image}
            source={{uri: 'https://4.bp.blogspot.com/-yQKpqQwDcl8/VtGPQvOIELI/AAAAAAAAADI/8y3ggoxFXOE/s1600/25-anh-bikini-dep-Cho-Min-Yeong-23.jpg'}}
          />
        </View>
        <View style={styles.generalInfo}>
          <View style={styles.generalInfoContent}>
            <View style={styles.amount}>
              <View style={styles.amountItem}>
                <Text style={styles.titleText}>223</Text>
                <Text style={styles.subTitleText}>posts</Text>
              </View>
              <View style={styles.amountItem}>
                <Text style={styles.titleText}>63.1K</Text>
                <Text style={styles.subTitleText}>followers</Text>
              </View>
              <View style={styles.amountItem}>
                <Text style={styles.titleText}>92</Text>
                <Text style={styles.subTitleText}>following</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10
  },
  imageArea: {
    marginRight: 20
  },
  image: {
    width: 90, 
    height: 90,
    borderRadius: 45
  },
  generalInfo: {
    flex: 2
  },
  generalInfoContent: {
    flexDirection: 'column'    
  },
  amount: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  subTitleText: {
    fontSize: 13,
    color: 'rgb(191,191,191)'
  },
  button: {
    marginTop: 10,
    backgroundColor: 'transparent',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(231,231,231)',
  }
});
