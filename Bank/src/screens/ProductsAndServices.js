import React from "react";
import { View, Text } from 'react-native'
import PrincipalButton from "../components/PrincipalButton";

export default () => {
    return (
        <>
            <View>
                <PrincipalButton
                    first="Loan"
                    second="Insurance"
                    third="Promotions"
                    fourth="Salary portability"
                    fifth="Refer and earn"
                    sixth="Shopping"
                />
            </View>
        </>
    )
}