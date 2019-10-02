import React, {Component} from 'react'
import {View, Text, StatusBar, StyleSheet, ActivityIndicator } from 'react-native'
import {Layout, TaskCard} from '../components';
import {API, COLOR_FOCUSED, COLOR_DEFAULT} from '../constants';

export default class HomeScreen extends Component
{
  state = {
    user: false,
    issues: [],
  }

  setUserInfo = async () => {
    await fetch(API.me, {credentials: 'include'})
      .then(response => response.json())
      .then(data => this.setState({user: data}));
  }

  getUserTasks = async () => {
    let resp = {}
    await fetch(API.userTasks, {credentials: 'include'})
      .then(response => response.json())
      .then(data => resp = data);
    this.setState({issues: resp.issues})
  }

  constructor(props){
    super(props)
    this.setUserInfo()
    this.getUserTasks()
  }

  render(){
    return (
      <Layout>
        <View>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          {
            this.state.user ?
            <View style={styles.userInfoContainer}>
              <View>
                <Text style={styles.userName}>{`${this.state.user.first_name} ${this.state.user.last_name}`}</Text>
                <Text style={styles.userSlug}>{ this.state.user.slug }</Text>
              </View>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>{this.state.user.first_name.charAt(0) + this.state.user.last_name.charAt(0)}</Text>
              </View>
            </View>
            : <ActivityIndicator size="large" color={COLOR_FOCUSED} />
          }

          <View style={styles.taskContainer}>
            <View style={{marginBottom: 20}}>
              <Text style={{color: COLOR_DEFAULT, fontSize: 20, fontWeight: 'bold'}}>Мои задачи</Text>

            </View>
            {
              this.state.issues.map(item => (
                <TaskCard data={item} key={item.id} />
              ))
            }
          </View>

        </View>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  userSlug: {
    fontSize: 20,
    color: COLOR_DEFAULT
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#57b1be',
    justifyContent: 'center'
  },
  avatarText: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  }
})