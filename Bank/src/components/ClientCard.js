import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default (props) => {
    return(
        <View style={styles.card}>
            <View style={styles.cardInfo}>
                <Text style={styles.cardName}>{props.name}</Text>
                <Text style={styles.cardFont}>{props.debitName}</Text>
                <Text style={styles.number}>{props.number}</Text>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.cardHolder}>
                    <Text style={styles.cardFont}>{props.cardHolder}</Text>
                    <Text style={styles.nameClient}>{props.nameClient}</Text>
                </View>
                <View style={styles.cardExpire}>
                    <Text style={styles.cardFont}>{props.expire}</Text>
                    <Text style={styles.cardDate}>{props.dateExpire}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 330,
        height: 190,
        backgroundColor: '#009e6d',
        borderRadius: 20
    },
    cardInfo: {
        paddingLeft: 30,
        paddingTop: 30
    },
    cardName: {
        color: '#fff',
        fontWeight: '800'
    },
    cardFont: {
        fontSize: 9,
        color: '#6fd6a5',
        fontWeight: "900"
    },
    number: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',
        letterSpacing: 2
    },
    cardHolder: {
        paddingLeft: 30,
        marginTop: 30
    },
    nameClient: {
        color: '#fff',
        fontWeight: "900"
    },
    subContainer: {
        flexDirection: "row"
    },
    cardExpire: {
        paddingTop: 30,
        marginLeft: 45
    },
    cardDate: {
        color: '#fff',
        fontWeight: "900",
        fontSize: 13
    }
})