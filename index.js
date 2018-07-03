import { AppRegistry } from 'react-native';
import App from './App';
import FlatListDemo from './pages/FlatListDemo';
import SwipeableFlatDemo from './pages/SwipeableFlatDemo';
import SectionListDemo from './pages/SectionListDemo';
import {StackNavigator} from 'react-navigation'

const AppRoot  = StackNavigator({
    App: {
        screen: App,
    },
    FlatListDemo: {
        screen: FlatListDemo,
        navigationOptions: {
            title: 'FlatListDemo'
        }
    },
    SwipeableFlatDemo: {
        screen: SwipeableFlatDemo,
        navigationOptions: {
            title: 'SwipeableFlatDemo'
        }
    },
    SectionListDemo: {
        screen: SectionListDemo,
        navigationOptions: {
            title: 'SectionListDemo'
        }
    }
})
AppRegistry.registerComponent('flatListExample', () => AppRoot);
