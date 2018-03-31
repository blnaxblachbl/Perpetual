import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        flexDirection: 'column',
        paddingTop: 10
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
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    view: {
        backgroundColor: '#212121',
        flex: 1,
    }
});

export default styles;
