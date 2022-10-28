import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (props) => {
    
    _valuesMod = (value) => {
        let posNeg = value.split('');

        for(let i = 0; i < posNeg.length; i++){
            result = posNeg.indexOf("+") 
            ? <Text style={{color: "#ef7a76"}}>{value}</Text> 
            : <Text style={{color: "#18b376"}}>{value}</Text>
        }
        return result;
    }
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subTitle}>{props.dateTime}</Text>
            </View>
            <View style={styles.values}>
                {_valuesMod(props.value)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#f2f2fa",
        width: 300,
        height: 50,
        borderRadius: 30,
        paddingLeft: 20
    },
    title: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 15
    },
    subTitle: {
        fontWeight: '500',
        fontSize: 12,
        color: "#b6b7b9"
    },
    values: {
        marginLeft: 90
    }
})