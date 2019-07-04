import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from "react-navigation"

import Home from "../Home"
import AllCars from "../AllCars"

const AppNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: Home,
    },
    AllCars: {
        screen: AllCars
    }
},
{
    tabBarOptions: {
        style: {
            backgroundColor: '#1c1e28'
        },
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        indicatorStyle: {
            backgroundColor: 'white'
        }
    }
});

export default AppNavigator;