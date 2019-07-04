import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { Dimensions, Text } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'

import Home from "../App"
import TabMaster from "../src/TabMaster"

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    TabMaster: {
        screen: TabMaster
    }
},
{
    defaultNavigationOptions:{
        title: 'Thacar Veículos',
        headerStyle: {
            borderBottomWidth:0,
            elevation: 0,
            backgroundColor: '#1c1e28'
        },
        headerTintColor: 'white',
        headerBackTitle:null,
        headerLayoutPreset:'center',
        headerRight: (
            <AntDesign name={'heart'} size={18} color={'white'} style={{ marginRight: 10 }}/>
        )
    }
});
export default createAppContainer(AppNavigator);