import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        paddingBottom: 10
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: 'black',
        marginBottom: 10
    },
    avatar: {
        height: 54,
        width: 54,
        borderRadius: 27,
    },
    data: {
        flexDirection: 'column',
        marginLeft: 15
    },
    nick: {
        color: 'white',
        fontSize: 17
    },
    name: {
        color: 'white',
        fontSize: 17
    }
});

export default styles;
