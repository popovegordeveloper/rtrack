import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class HomeScreen extends Component
{
  state = {
    'title': "STATISTIC home screen page"
  }

  render(){
    return (
      <View>
        <Text>{this.state.title}</Text>
      </View>
    )
  }
}