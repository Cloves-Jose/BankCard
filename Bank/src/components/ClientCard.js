import React from "react";
import { View, StyleSheet } from 'react-native'

export default (props) => {
    return(
        <View style={styles.card}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 330,
        height: 190,
        backgroundColor: '#009e6d',
        borderRadius: 20
    }
})