import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './HomeScreen'
import { STATIC_HOME } from "../routes";

export default createStackNavigator({
    [STATIC_HOME]: { screen: HomeScreen },
}, {
    headerMode: 'none'
})