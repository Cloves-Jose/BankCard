import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cards from './screens/Cards';
import History from './screens/History'
import Home from './screens/Home';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

export default class App extends Component{
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{ headerShown: false }}>
                        {/* <Tab.Screen name="Home" component={Home}/> */}
                        <Tab.Screen name="Cards" component={Cards}/>
                        {/* <Tab.Screen name="History" component={History}/>
                        <Tab.Screen name="Profile" component={Profile}/> */}
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})