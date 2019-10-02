import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class HomeScreen extends Component
{
  state = {
    'title': "PROJECT home screen page"
  }

  render(){
    return (
      <View>
        <Text>{this.state.title}</Text>
      </View>
    )
  }
}