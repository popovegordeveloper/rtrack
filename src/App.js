import React, {Component} from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import {createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import ProfileScreen from './profile'
import ProjectScreen from './project'
import StatisticScreen from './statistic'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {COLOR_FOCUSED, COLOR_DEFAULT} from './constants';

const tabs = createMaterialBottomTabNavigator (
  {
    Profile: {screen: ProfileScreen, navigationOptions:{
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialCommunityIcons style={[{color: tintColor}]} size={30} name={'account'}/>
          </View>),
      }  },
    Project: {screen: ProjectScreen, navigationOptions:{
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialCommunityIcons style={[{color: tintColor}]} size={30} name={'buffer'}/>
          </View>),
      }  },
    Statistic: {screen: StatisticScreen, navigationOptions:{
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialCommunityIcons style={[{color: tintColor}]} size={30} name={'chart-bar'}/>
          </View>),
      }  },
  }, {
    activeColor: COLOR_FOCUSED,
    inactiveColor: COLOR_DEFAULT,
    barStyle: { backgroundColor: 'white', elevation: 0 },
    labeled: false
  }
)

const AppContainer = createAppContainer(tabs)

export default AppContainer