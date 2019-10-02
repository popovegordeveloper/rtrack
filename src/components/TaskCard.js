import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {COLOR_DEFAULT} from '../constants';

const containerStyle = (priority) => {
  let bc = '#f7f7f7';
  switch (priority) {
    case 0:
      bc = '#fff8e1'
      break
    case 1:
      bc = '#ffecb3'
      break
    case 2:
      bc = '#ffe082'
      break
    case 3:
      bc = '#ffcc80'
      break
    case 4:
      bc = '#ffa726'
      break
    case 5:
      bc = '#fb8c00'
      break
  }

  return {
    backgroundColor: bc,
    padding: 25,
    borderRadius: 5,
    marginBottom: 20
  }
}

const TaskCard = ({data}) => {
  return(
    <View style={containerStyle(data.ipriority)}>
      <Text style={styles.projectName}>{ data.project.name }</Text>
      <View style={{flexDirection: 'row'}} >
        <Text style={styles.number}>{ `#${data.number} - ` }</Text>
        <Text style={styles.projectName}>{ data.name }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#535353'
  },
  number: {
    fontSize: 18,
    color: '#535353'
  },
})

export {TaskCard}
