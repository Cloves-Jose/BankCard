import { StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    title: {
        justifyContent: "flex-start",
        fontWeight: "900",
        fontSize: 20,
        color: '#333',
        marginBottom: 20
    },
    subContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: 25,
        paddingTop: 20,
    },
    button: {
        backgroundColor: '#f2f2fa',
        alignItems: "flex-start",
        justifyContent: "center",
        width: 230,
        height: 50,
        paddingLeft: 20,
        borderRadius: 25
    },
    buttonTitle: {
        fontWeight: "bold",
        fontSize: 12,
        paddingLeft: 5,
        color: "#333"
    },
})
