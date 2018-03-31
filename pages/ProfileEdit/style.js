import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
    },
    nameInfoContainer: {
        justifyContent: 'space-between',
        height: 60,
        paddingTop: 5,
        paddingLeft: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 10,
    },
    mainText : {
        fontSize: 15,
        color: 'white',
    },
    avatarContainer: {
        height: 82,
        width: 82,
        borderRadius: 41,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 15,
        color: "white"
    },
    containerButton: {
        backgroundColor: "transparent",
        overflow: 'hidden',
        width: "100%",
        height: 40,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textInput: {
        backgroundColor: "transparent",
        width: "100%",
        height: 40,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    }
});

export default styles;
