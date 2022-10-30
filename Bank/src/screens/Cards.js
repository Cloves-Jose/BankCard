import React from "react";
import { View, FlatList, Text, StyleSheet,} from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import ClienteHome from "../components/ClientHome";
import ClientBottomSheet from "../components/ClientBottomSheet";
import ClientCard from "../components/ClientCard";
import ClientButton from "../components/ClientButton";
import globalStyles from '../../styles/GlobalStyles';

export default () => {

    /**
     * Swipe do cartão de crédito
     */
    _cardSwipe = (info) => {
        return (
            <>
                <View style={styles.card}>
                    <SwiperFlatList index={0} style={styles.cardSwipe}>
                            <View style={{marginRight: 2.5}}>
                                <ClientCard>
                                    {this._cardInfo(info)}
                                </ClientCard>
                            </View>
                            <View style={{marginLeft: 2.5}}>
                                <ClientCard>
                                    <View>
                                        <View></View>
                                    </View>
                                </ClientCard>
                            </View>
                    </SwiperFlatList>
                </View>
            </>
        )
    }

    /**
     * Informações do cartão de crédito
     */
    _cardInfo = (info) => {
        return (
            <>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardName}>{info.cardName}</Text>
                    <Text style={styles.cardFont}>{info.cardPlan}</Text>
                    <Text style={styles.number}>{info.number}</Text>
                </View>
                <View style={styles.subCont}>
                    <View style={styles.cardHolder}>
                        <Text style={styles.cardFont}>CARDHOLDER</Text>
                        <Text style={styles.nameClient}>{info.nameClient}</Text>
                    </View>
                    <View style={styles.cardExpires}>
                        <Text style={styles.cardFont}>EXPIRE</Text>
                        <Text style={styles.cardDate}>{info.dateExpire}</Text>
                    </View>
                </View>
            
            </>
        )
    }

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
                <ClientBottomSheet>
                        <View style={globalStyles.subContainer}>
                            <Text style={globalStyles.title}>Cards</Text>
                        </View>
                        {this._cardSwipe({
                            cardName: "CARDNAME",
                            cardPlan: "DEBIT CARD",
                            number: "**** **** **** 4265",
                            nameClient: "Linda Thompson",
                            dateExpire: "12/22"
                        })}
                        <View style={globalStyles.subContainer}>
                            <Text style={globalStyles.title}>Card Info</Text>
                        </View>
                        <View style={styles.listContainer}>
                            {this._listButtons()}
                        </View>
                </ClientBottomSheet>
            </ClienteHome>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        marginRight: 5,
        marginLeft: 5
    },
    listContainer: {
        paddingLeft: 30,
        flex: 1
    },
    cardInfo: {
        paddingLeft: 30,
        paddingTop: 30
    },
    cardName: {
        color: "#fff",
        fontWeight: '800'
    },
    cardFont: {
        fontSize: 9,
        color: '#6fd6a5',
        fontWeight: "900"
    },
    number: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',
        letterSpacing: 2
    },
    subCont: {
        flexDirection: "row"
    },
    cardHolder: {
        paddingLeft: 30,
        marginTop: 30
    },
    nameClient: {
        color: '#fff',
        fontWeight: "900"
    },
    cardExpires: {
        paddingTop: 30,
        marginLeft: 45
    },
    cardDate: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 13
    },
    cardSwipe: {
        margin: 5
    },
    backCard: {
        marginTop: 15,
        width: 50,
        height: 50,
        backgroundColor: "#fff"
    }
})
