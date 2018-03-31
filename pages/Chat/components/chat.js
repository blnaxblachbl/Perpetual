import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default (props) => (
    <View style={styles.container}>
        <View style={styles.user}>
            { props.user.avatar ?
                <Image source={{ uri: props.user.avatar }} style={styles.avatar} /> :
                <Image source={require('../../../assets/profile.png')} style={styles.avatar} />
            }
            <Text style={styles.nick}>{props.user.nick}</Text>
        </View>
        <Text style={styles.lastMessage}>{props.lastMessage.text}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        padding: 5
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginBottom: 5
    },
    nick: {
        color: 'white',
        fontSize: 17,
        marginLeft: 20
    },
    lastMessage: {
        color: 'white'
    },
    user: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
