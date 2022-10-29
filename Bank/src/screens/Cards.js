import React from "react";
import { View, FlatList} from 'react-native'
import ClienteHome from "../components/ClientHome";
import ClientBottomSheet from "../components/ClientBottomSheet";
import ClientCard from "../components/ClientCard";
import ClientButton from "../components/ClientButton";

export default () => {

    /**
     * Lista os botões de informações
     */
    _listButtons = () => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                    data={[
                        {key: '1', title: 'Travel Card'},
                        {key: '2', title: 'Online Payment'},
                        {key: '3', title: 'Fisic Payment'},
                        {key: '4', title: 'Health'},
                        {key: '5', title: 'Tips'}
                    ]}
                    renderItem={({item}) => 
                    <View style={{margin: 5}}>
                        <ClientButton title={item.title} icon={item.icon}/>
                    </View>
                    }
                />
            )
        }

    return (
        <>
            <ClienteHome name="Linda" plan="PLUS" value="513.89$" subtitle="Your balance">
                <ClientBottomSheet 
                    title="Cards" 
                    info="Card Info"
                    list={this._listButtons()}
                    >
                    <ClientCard name="CARDNAME" 
                        debitName="DEBIT CARD" 
                        number="**** **** **** 4265"
                        cardHolder="CARDHOLDER"
                        nameClient="Linda Thompson"
                        expire="EXPIRE"
                        dateExpire="12/22"/>
                </ClientBottomSheet>
            </ClienteHome>
        </>
    )
}
