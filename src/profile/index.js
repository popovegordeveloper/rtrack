import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './HomeScreen'
import { PROFILE_HOME } from "../routes";

export default createStackNavigator({
    [PROFILE_HOME]: { screen: HomeScreen },
}, {
    headerMode: 'none'
})