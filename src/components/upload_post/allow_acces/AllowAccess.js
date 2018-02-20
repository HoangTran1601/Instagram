import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  CameraRoll,
  Dimensions,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window')

export default class AllowAccess extends Component<{}> {
  constructor(props) {
    super(props)
  
    this.state = {
       photos: [],
       index: null,
       accessError: null
    };
  };
  setIndex = (index) => {
    if (index === this.state.index) {
      index = null
    }
    this.setState({ index })
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 5,
      assetType: 'All'
    })
    .then(r => {
      this.setState({photos: r.edges})
    })
    .catch(err => {
      this.setState({accessError: 'error'})
    })
  }
  render() {
    let template = null
    if (this.state.accessError === null) {
      template = (
        <ScrollView
          contentContainerStyle={styles.scrollView}>
          {
            this.state.photos.map((p, i) => {
              return (
                <TouchableHighlight
                  style={{opacity: i === this.state.index ? 0.5 : 1}}
                  key={i}
                  underlayColor='transparent'
                  onPress={() => this.setIndex(i)}
                >
                  <Image
                    style={{
                      width: width/3,
                      height: width/3
                    }}
                    source={{uri: p.node.image.uri}}
                  />
                </TouchableHighlight>
              )
            })
          }
        </ScrollView>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
          <Text 
            style={styles.enable}
            onPress={this.getPhotos}
          >
            {this.props.enable}</Text>
            {template}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 25,
    color: 'rgb(142,142,142)',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20
  },
  description: {
    fontSize: 15,
    color: 'rgb(142,142,142)',
    textAlign: 'center',
    marginBottom: 30
  },
  enable: {
    fontSize: 15,
    color: 'rgb(0,0,238)',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgb(0,0,238)',
    textAlign: 'center'
  }
});


AllowAccess.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  enable: PropTypes.string
}
