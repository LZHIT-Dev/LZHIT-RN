import { createStackNavigator } from 'react-navigation'
import App from '../App'
import Jwxt from '../page/Jwxt'
export const AppStackNavigator = createStackNavigator({
    App: {
        screen: App
    },
    Jwxt: {
        screen: Jwxt
    }
})