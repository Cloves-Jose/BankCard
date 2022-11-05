import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ClientHome from "../components/ClientHome";
import ClientBottomSheet from "../components/ClientBottomSheet";
import TransactionInfo from "../components/TransactionInfo";
import globalStyles from "../../styles/GlobalStyles";
import transac from '../../data/transaction';

export default () => {

    /**
     * Lista de transações
     */
    _listTransactions = () => {
        return (
            <FlatList
            showsVerticalScrollIndicator={false}
                data={transac}
                renderItem={({item}) => 
                    <View style={styles.containerList}>
                        <TransactionInfo title={item.name} dateTime={item.dateTime} value={item.value}/>
                    </View>
                }
            />
        )
    }

    return (
        <>
            <ClientHome name="Linda" plan="PLUS" value="513.89$" subtitle="Your balance">
                <ClientBottomSheet>
                    <View style={globalStyles.subContainer}>
                        <Text style={globalStyles.title}>Transaction</Text>
                    </View>
                    {_listTransactions()}
                </ClientBottomSheet>
            </ClientHome>
        </>
    )
}

const styles = StyleSheet.create({
    containerList: {
        alignItems: 'center'
    }
})