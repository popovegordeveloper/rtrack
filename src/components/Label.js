import React from 'react'
import {Text, View} from 'react-native';

const Label = props => {
  return (
    <View style={[{paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 40}, props.style]}>
      <Text style={{color: props.style.color ? props.style.color : 'black'}}>{props.text}</Text>
    </View>
  )
}

export {Label}