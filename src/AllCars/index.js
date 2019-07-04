import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, ImageBackground, Image, Animated, Dimensions } from 'react-native';


export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  static navigationOptions = {
    title: 'Carros'
  };

  render() {

    return (
        <View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },
});
