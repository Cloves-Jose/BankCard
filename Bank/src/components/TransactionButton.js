import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (props) => {
    
    /**
     * Formatação condicional dos valores
     */
    _valuesCond = (value) => {
        let posNeg = value.split('');
        for(let i = 0; i < posNeg.length; i++){
            result = posNeg.indexOf("+") 
            ? <Text style={styles.operations.sum}>{value}</Text> 
            : <Text style={styles.operations.sub}>{value}</Text>
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
                {_valuesCond(props.value)}
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
    operations: {
        sum: {
            color: "#ef7a76",
            fontWeight: "bold"
        },
        sub: {
            color: "#18b376",
            fontWeight: "bold"
        }

    },
    values: {
        marginLeft: 100
    }
})