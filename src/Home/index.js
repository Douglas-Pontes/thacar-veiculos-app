import React, {Component} from 'react';
import {TouchableOpacity, FlatList, StyleSheet, Text, View, ScrollView, Image, ImageBackground, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
import api from "../config";

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: []
    }

    this.getCars()
  }

  getCars = async () => {
    const cars = await api.get('carrosdestaque').catch((e) => console.log(e))

    this.setState({ cars: cars.data })

    console.log(this.state.cars)
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
          
          <ScrollView 
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              pagingEnabled={true} 
              style={{
                marginTop: 20,               
                backgroundColor: 'white',
                borderBottomRightRadius: 8, 
                borderBottomLeftRadius: 8, 
                borderWidth: 0.5,
                borderColor: '#ccc',
                borderRadius: 8
              }}>
                { this.state.cars != [] &&
                  <FlatList data={this.state.cars} horizontal={true} style={{ backgroundColor: 'white', borderRadius: 20 }} keyExtractor={(item) => item.id} renderItem={({item}) => (
                            <View>
                              <Image source={{uri: item.carImages[0].url}} style={{                 
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
                                }}>{item.nome}</Text>
                                <Text style={{
                                  opacity: 0.7,
                                  color: '#191919',
                                  fontSize: 12,
                                  fontWeight: '400',
                                }}>{item.year} - {item.km} - {item.gears}</Text>
                                <Text style={{
                                  marginTop: 10,
                                  color: '#191919',
                                  fontSize: 22,
                                  fontWeight: '700',
                                }}>R$ {item.price}</Text>
                              </View>
                            </View>
                  )} />
                }
          </ScrollView>
        
        </View>

        <View style={{ height: 20 }}/>
          <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, width }}>
              <Text style={{     
                color: '#191919',
                fontSize: 24,
                fontWeight: '700' 
              }}>Venda seu carro conosco</Text>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 2 }}>
                  <Text style={{
                      fontSize: 15,
                      fontWeight: '400',
                      marginTop: 5
                  }}>
                    Entre em contato, faremos o melhor negócio para você, com garantia e procedencia
                  </Text>
                  <Text style={{
                      fontSize: 15,
                      fontWeight: '400',
                      marginTop: 8,
                      color: 'red'
                  }}>
                      Entre em contato aqui >
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Image source={require('../../assets/img/sell.png')} style={{ width: 100, height: 100 }}/>  
                </View>
              </View>
              
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efeff4'
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
