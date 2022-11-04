import React from 'react'
import { View, Text } from 'react-native'
import PrincipalButton from '../components/PrincipalButton'

export default () => {
    return (
        <>
            <View>
                <PrincipalButton
                    first="Apply my money"
                    second="CDB"
                    third="My investments"
                    fourth="Invest in one click"
                    fifth="Learn to invest"
                    sixth="See all services"
                />
            </View>
        </>
    )
}