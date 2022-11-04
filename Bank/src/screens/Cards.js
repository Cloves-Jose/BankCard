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
     * Verso do cartão
     */
    _backCard = (info) => {
        return (
            <>
                <View style={styles.containerCard}>
                    <View style={styles.backCard}></View>
                </View>
                <View style={styles.subCard}>
                    <Text style={globalStyles.planType}>{info.plan}</Text>
                </View>
            </>
        )
    }

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
                                    {_backCard({
                                        plan: "PLUS"
                                    })}
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
                        {key: '1', title: 'Travel Card', icon: 'airplane'},
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
                        {_cardSwipe({
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
                            {_listButtons()}
                        </View>
                </ClientBottomSheet>
            </ClienteHome>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        marginRight: "1.3%",
        marginLeft: "1.3%"
    },
    listContainer: {
        paddingLeft: "8%",
        flex: 1
    },
    cardInfo: {
        paddingLeft: "8%",
        paddingTop: "8%"
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
        marginTop: "8%",
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',
        letterSpacing: 2
    },
    subCont: {
        flexDirection: "row"
    },
    cardHolder: {
        paddingLeft: "8%",
        marginTop: "8%"
    },
    nameClient: {
        color: '#fff',
        fontWeight: "900"
    },
    cardExpires: {
        paddingTop: "8%",
        marginLeft: "20%"
    },
    cardDate: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 13
    },
    cardSwipe: {
        margin: "2%"
    },
    containerCard: {
        alignItems: "center",
    },
    backCard: {
        marginTop: "8%",
        width: "100%",
        height: "40%",
        backgroundColor: "#DCDCDC"
    },
    subCard: {
        marginTop: "2%",
        marginLeft: "10%",
        backgroundColor: '#fe6770',
        width: "20%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
})
