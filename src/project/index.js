import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './HomeScreen'
import { PROJECT_HOME } from "../routes";

export default createStackNavigator({
    [PROJECT_HOME]: { screen: HomeScreen },
}, {
    headerMode: 'none'
})