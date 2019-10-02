import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'

const Layout = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {props.children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25,
  }
})

export {Layout}