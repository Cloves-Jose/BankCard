import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from '@rneui/themed';
import globalStyles from '../../styles/GlobalStyles';

export default (props) => {
    return (
        <View>
            <TouchableHighlight>
                <View style={globalStyles.button}>
                    <View style={styles.subContainer}>
                        <Icon name={props.icon} size={12} color="black"/>
                        <Text style={globalStyles.buttonTitle}>{props.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})