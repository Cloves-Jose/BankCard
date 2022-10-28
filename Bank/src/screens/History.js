import React from "react";
import { View, Text, FlatList } from "react-native";
import ClientHome from "../components/ClientHome";
import ClientBottomSheet from "../components/ClientBottomSheet";
import TransactionButton from "../components/TransactionButton";

export default () => {

    _listTransactions = () => {
        return (
            <></>
        )
    }

    return (
        <>
            <ClientHome name="Linda" plan="PLUS" value="513.89$" subtitle="Your balance">
                <ClientBottomSheet title="Transactions">
                    <TransactionButton title="John Peterson" dateTime="Just now" value="+50.00$"/>
                </ClientBottomSheet>
            </ClientHome>
        </>
    )
}