import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ClientBottomSheet from './ClientBottomSheet';

export default (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.rowContainer}>
                    <View style={styles.subContainer}>
                        <Text style={styles.nameClient}>{props.name}</Text>
                        <Text style={styles.planType}>{props.plan}</Text>
                    </View>
                    <Image
                        style={styles.imageClient}
                        source={require('../../assets/images/woman.jpg')}
                    ></Image>
                </View>
            </View>
            <View style={styles.subValues}>
                <Text style={styles.values}>{props.value}</Text>
                <Text style={styles.subTitle}>{props.subtitle}</Text>
            </View>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop : 15,
        backgroundColor:'#00b781'
    },
    image: {
        with: 60,
        height: 50,
    },
    subContainer: {
        alignItems: 'flex-end',
        paddingRight: 15
    },
    rowContainer: {
        flexDirection: 'row',
    },
    nameClient: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '500'
    },
    planType: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '500',
        backgroundColor: '#fe6770',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8
    },
    imageClient: {
        width: 50,
        height: 50,
        borderRadius: 15,
    },
    values: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '900',
    },
    subTitle: {
        color: '#fff',
        fontSize: 12,
    },
    subValues: {
        paddingLeft: 15,
    },
    title: {
        color: '#3D72DE',
        fontSize: 30,
        fontWeight: 'bold'
    },
})