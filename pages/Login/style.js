import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 15,
        color: "white"
    },
    containerButton: {
        backgroundColor: "transparent",
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        overflow: 'hidden',
        width: "100%",
        height: 40,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: "center",
    },
    headerText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    loginButton: {
        height: 40,
        width: 220,
        padding: 10
    }
});

export default styles;
