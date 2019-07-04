import React, {Component} from 'react';
import {TouchableOpacity, FlatList, StyleSheet, Text, View, ScrollView, Image, ImageBackground, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  static navigationOptions = {
    title: 'Home'
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={{ height: 20 }}/>
        <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, width }}>
          <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{     
              color: '#191919',
              fontSize: 20,
              fontWeight: '700' 
            }}>Carros em Destaque</Text>
            <Text style={{
              color: '#ff4f29',
              fontSize: 14,
              fontWeight: '700',
            }}>Ver todos >></Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} style={{  
                marginTop: 20,               
                backgroundColor: 'white',
                borderBottomRightRadius: 8, 
                borderBottomLeftRadius: 8, 
                borderWidth: 0.5,
                borderColor: '#ccc',
                borderRadius: 8
              }}>
            <View>
              <Image source={require('../../assets/img/car1.jpg')} style={{                 
                width: width - 40, 
                height: 270,
                resizeMode: 'cover',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              }} />
              <View style={{ padding: 10 }}>
                <Text style={{ 
                  color: '#191919',
                  fontSize: 16,
                  fontWeight: '500',
                }}>FORD FOCUS 2.0 POWERSHIFT</Text>
                <Text style={{
                  opacity: 0.7,
                  color: '#191919',
                  fontSize: 12,
                  fontWeight: '400',
                }}>2013/2014 - 80.000km - Automático</Text>
                <Text style={{
                  marginTop: 10,
                  color: '#191919',
                  fontSize: 22,
                  fontWeight: '700',
                }}>R$ 36.990</Text>
              </View>
            </View>
            <View>
              <Image source={require('../../assets/img/car2.jpg')} style={{                 
                width: width - 40, 
                height: 270,
                resizeMode: 'cover',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              }} />
              <Text>SADSA</Text>
            </View>
            <View>
              <Image source={require('../../assets/img/car3.jpg')} style={{ 
                width: width - 40, 
                height: 270, 
                resizeMode: 'cover',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              }} />
              <Text>SADSA</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  hotCars: {
    backgroundColor: 'white',
    borderRadius: 30
  },
  carItem: {
    backgroundColor: 'white',
    padding: 20
  }
});
