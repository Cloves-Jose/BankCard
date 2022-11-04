import React from "react";
import { View, Page, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ClientHome from "../components/ClientHome";
import ClientBottomSheet from "../components/ClientBottomSheet";
import Principal from "./Principal";
import ProductsAndServices from './ProductsAndServices'
import Investments from './Investments'
import globalStyles from '../../styles/GlobalStyles'

const Tab = createMaterialTopTabNavigator();

export default () => {


    /**
     * Navegação entre abas superior
     */
    _tabNavigation = () => {
        return (
            <Tab.Navigator 
            initialRouteName="Principal"
            style={[globalStyles.tabContainer]}
            screenOptions={tabStyles}>
                <Tab.Screen name="Principal" component={Principal} />
                <Tab.Screen name="Products and Services" component={ProductsAndServices}/>
                <Tab.Screen name="Investments" component={Investments}/>
            </Tab.Navigator>
        )
    }

    return (
        <>
            <ClientHome name="Linda" plan="PLUS" value="513.89$" subtitle="Your balance">
                <ClientBottomSheet>
                    {_tabNavigation()}
                </ClientBottomSheet>
            </ClientHome>
        </>
    )
}

/**
 * Estilos do tab navigator
 */
const tabStyles = {
    tabBarLabelStyle: {
        fontWeight: "bold",
        fontSize: 10,
        paddingLeft: 5,
        color: "#333",
    }
}

