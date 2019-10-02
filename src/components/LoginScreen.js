import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {WebView} from 'react-native-webview';
import CookieManager from 'react-native-cookies';
import {AUTH_URL, HOST} from '../constants';
import AppContainer from '../App'
import * as cookie from 'cookie';

export default class LoginScreen extends Component {

  state = {
    is_logged: false
  }

  componentDidMount = async() => {
    let cookies = null;
    await AsyncStorage.getItem('cookie', (err, result) => {
      cookies = result;
    });
    if (cookies) this.setState({is_logged: true})
}


  onNavigationStateChange = (webViewState: { url: string }) => {
    const { url } = webViewState;
    console.log(url);
    if (url === HOST){
      CookieManager.get(HOST).then().then((res) => {
        AsyncStorage.setItem('cookie', JSON.stringify(res))
      });
    } else AsyncStorage.removeItem('cookie')
  }

  render() {
    return (
      !this.state.is_logged ?
      <WebView
        source={{ uri: HOST }}
        onNavigationStateChange={this.onNavigationStateChange}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        sharedCookiesEnabled={true}
        style={{ flex: 1 }}
      /> : <AppContainer />
    );
  }
}