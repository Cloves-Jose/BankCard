import React from "react";
import { View, StyleSheet } from "react-native";
import PrincipalButton from "../components/PrincipalButton";

export default () => {

    return (
        <View style={styles.container}>
            <PrincipalButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#836FFF"
    }
})