import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome' 


export default (props) => {
    return (
        <View>
            <TouchableHighlight>
                <View style={styles.button}>
                    <View style={styles.subContainer}>
                        <Icon name={props.icon} size={12} color="black"/>
                        <Text style={styles.buttonTitle}>{props.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f2f2fa',
        alignItems: "flex-start",
        justifyContent: "center",
        width: 230,
        height: 50,
        paddingLeft: 20,
        borderRadius: 25
    },
    buttonTitle: {
        fontWeight: "bold",
        fontSize: 12,
        paddingLeft: 5,
        color: "#333"
    },
    subContainer: {
        flexDirection: "row",
        justifyContent: "center",
    }
})