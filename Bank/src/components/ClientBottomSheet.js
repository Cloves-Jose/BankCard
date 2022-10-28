import React, { useRef } from "react";
import { View, Button, StyleSheet, Text} from "react-native";

export default (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.card}>
                {props.children}
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.title}>{props.info}</Text>
            </View>
            <View style={styles.listContainer}>
                {props.list}
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    subContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: 25,
        paddingTop: 20
    },
    title: {
        justifyContent: "flex-start",
        fontWeight: "900",
        fontSize: 20,
        color: '#333'
    },
    card: {
        marginTop: 20,
        alignItems: "center"
    },
    listContainer: {
        paddingTop: 15,
        paddingLeft: 30,
        flex: 1
    }
})