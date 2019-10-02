import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {COLOR_DEFAULT, PRIORITY, STATE} from '../constants';
import {Label} from '.';

const TaskCard = ({data}) => {
  return(
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Label text={STATE[data.state].name} style={{backgroundColor: STATE[data.state].color, color: "#fff", marginRight: 5}}/>
        <Label text={PRIORITY[data.ipriority].name} style={{backgroundColor: PRIORITY[data.ipriority].color}}/>
      </View>
      <Text style={styles.projectName}>{ data.project.name }</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}} >
        <Text style={styles.number}>{ `#${data.number} - ` }</Text>
        <Text style={styles.taskName}>{ data.name }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  projectName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#535353'
  },
  taskName: {
    fontSize: 16,
    color: '#535353'
  },
  number: {
    fontSize: 16,
    color: '#535353'
  },
})

export {TaskCard}
