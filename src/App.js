import React, {Component} from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import {createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import ProfileScreen from './profile'
import ProjectScreen from './project'
import StatisticScreen from './statistic'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {COLOR_FOCUSED, COLOR_DEFAULT} from './constants';

const tabs = createMaterialBottomTabNavigator (
  {
    Profile: {screen: ProfileScreen, navigationOptions:{
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Ionicons style={[{color: tintColor}]} size={30} name={'md-home'}/>
          </View>),
      }  },
    Project: {screen: ProjectScreen, navigationOptions:{
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Ionicons style={[{color: tintColor}]} size={30} name={'ios-apps'}/>
          </View>),
      }  },
    Statistic: {screen: StatisticScreen, navigationOptions:{
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Ionicons style={[{color: tintColor}]} size={30} name={'ios-stats'}/>
          </View>),
      }  },
  }, {
    activeColor: '#212121',
    inactiveColor: COLOR_DEFAULT,
    barStyle: { backgroundColor: 'white', elevation: 0 },
    labeled: false
  }
)

const AppContainer = createAppContainer(tabs)

export default AppContainer