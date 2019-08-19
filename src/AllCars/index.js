import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView, Image, Animated, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

import { coreBase } from  '../services/coreBase';
import api from "../config";

import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AllCars extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: []
    }

    this.getCars()
  }

  getCars = async () => {
    const cars = await api.get('carros').catch((e) => console.log(e))

    this.setState({ cars: cars.data })

    console.log(this.state.cars)
  }

  static navigationOptions = {
    title: 'Carros'
  };

  render() {

    return (
        <ScrollView>
          {
            this.state.cars != [] && 
              <FlatList data={this.state.cars} style={{ backgroundColor: 'white', borderRadius: 20 }} keyExtractor={(item) => item.id} renderItem={({item}) => (
                <View style={{ borderRadius: 10, borderColor: 'grey', borderWidth: 0.5, marginVertical: 5 }}>
                    <ScrollView horizontal={true} pagingEnabled={true}>
                      {
                        item.carImages && item.carImages.map(function(image){
                          return <Image source={{uri: image.url}} style={{                 
                            width, 
                            height: 300,
                            resizeMode: 'cover',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                            }} 
                          />
                        })
                      }
                    </ScrollView>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Text style={{ 
                          color: '#191919',
                          fontSize: 18,
                          fontWeight: '500',
                        }}>{item.nome}</Text>
                        <TouchableOpacity>
                          <AntDesign name={"hearto"} size={24} color={"black"}/>
                        </TouchableOpacity>
                        
                      </View>
                      <Text style={{
                        opacity: 0.7,
                        color: '#191919',
                        fontSize: 12,
                        fontWeight: '400',
                      }}>{item.year} - {item.km} - {item.gears}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Text style={{
                          marginTop: 10,
                          color: '#191919',
                          fontSize: 24,
                          fontWeight: '700',
                        }}>R$ {item.price}</Text>
                        <Text style={{
                          color: 'red',
                          fontSize: 16,
                          fontWeight: '700',
                        }}>Ver mais</Text>
                      </View>
                    </View>
                </View>
            )} />
          } 
        </ScrollView>
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
