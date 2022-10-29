import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ClientHome from "../components/ClientHome";
import ClientBottomSheet from "../components/ClientBottomSheet";
import TransactionInfo from "../components/TransactionInfo";
import globalStyles from "../../styles/GlobalStyles";

export default () => {

    /**
     * Lista de transações
     */
    _listTransactions = () => {
        return (
            <FlatList
            showsVerticalScrollIndicator={false}
                data={[
                    {key: '1', title: 'John Peterson', dateTime: "Just now", value: "+50.00$"},
                    {key: '2', title: 'Clark Jackson', dateTime: "10:32", value: "-46.70$"},
                    {key: '3', title: 'Taxi', dateTime: "09:12", value: "-6.90$"},
                    {key: '4', title: 'Gym', dateTime: "18:27", value: "-3.29$"},
                    {key: '5', title: 'Online Store', dateTime: "16:33", value: "-347.00$"}
                ]}
                renderItem={({item}) => 
                    <View style={styles.containerList}>
                        <TransactionInfo title={item.title} dateTime={item.dateTime} value={item.value}/>
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
                    {this._listTransactions()}
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