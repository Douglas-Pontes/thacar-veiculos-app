import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, ImageBackground, Image, Animated, Dimensions } from 'react-native';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
      orientation: 'portrait'
    }

    Dimensions.addEventListener('change', () => {
      const dim = Dimensions.get('screen');

      this.setState({
          orientation: dim.width >= dim.height ? 'landscape' : 'portrait'
      });
    });
  }

  static navigationOptions = {
    header: null
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 3,
      duration: 400,
      useNativeDriver: true
    }).start()
  }

  render() {

    isPortrait = () => {
      if(this.state.orientation == 'portrait')
        return 120
      else
        return 0
    }

    return (
      <ImageBackground source={require('./assets/img/lambo2.jpg')} style={[styles.container, { paddingTop: isPortrait(), justifyContent: isPortrait() == 0 ? 'center' : null }]}>
        <Animated.Image onLoad={this.onLoad} source={require('./assets/img/logowhite.png')} style={
            {
                width: 200, 
                height: 200, 
                resizeMode: 'contain', 
                alignSelf: 'center', 
                opacity: this.state.opacity, 
                transform: [{ scale:  this.state.opacity.interpolate({
                    inputRange: [0,1],
                    outputRange: [0.85, 1]
                  })
                }]
            }
          }/>      

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('TabMaster')}} style={{ width: '30%', height: 40, borderColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginRight: 10}}>
            <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>Loja</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={{ width: '30%', height: 40, borderColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>Contato</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  input: {

  }
});
