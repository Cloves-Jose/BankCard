import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import globalStyles from "../../styles/GlobalStyles"
import { Icon } from '@rneui/themed'

export default (props) => {

    return (
        <>  
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Icon name={props.icon} size={12}/>
                <TouchableHighlight>
                    <View>
                        <Text style={globalStyles.buttonTitle}>Pix/QR Code</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.subContainer}>
                <Icon name={props.icon} size={12}/>
                <TouchableHighlight>
                    <View>
                        <Text style={globalStyles.buttonTitle}>Transactions</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.subContainer}>
                <Icon name={props.icon} size={12}/>
                <TouchableHighlight>
                    <View>
                        <Text style={globalStyles.buttonTitle}>Cards</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.subContainer}>
                <Icon name={props.icon} size={12}/>
                <TouchableHighlight>
                    <View>
                        <Text style={globalStyles.buttonTitle}>Payment</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.subContainer}>
                <Icon name={props.icon} size={12}/>
                <TouchableHighlight>
                    <View>
                        <Text style={globalStyles.buttonTitle}>Gift Cards</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.subContainer}>
                <Icon name={props.icon} size={12}/>
                <TouchableHighlight>
                    <View>
                        <Text style={globalStyles.buttonTitle}>Deposit</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    subContainer: {
        backgroundColor: "#fff",
        width: Dimensions.get("window").width / 3,
        height: Dimensions.get("window").height / 6,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "#DCDCDC"
    },
})