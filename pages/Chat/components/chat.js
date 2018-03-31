import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export default (props) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={props.onPressChat}>
            { props.user.avatar ?
                <Image source={{ uri: props.user.avatar }} style={styles.avatar} /> :
                <Image source={require('../../../assets/profile.png')} style={styles.avatar} />
            }
            <View style={styles.message}>
                <Text style={styles.nick}>{props.user.nick}</Text>
                <Text style={styles.lastMessage}>{props.lastMessage.text.substring(0, 70)}...</Text>
            </View>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 85,
        width: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        flexDirection: 'row',
        padding: 5
    },
    avatar: {
        height: 54,
        width: 54,
        borderRadius: 27,
        marginBottom: 5
    },
    nick: {
        color: 'white',
        fontSize: 17,
    },
    lastMessage: {
        color: 'white'
    },
    message: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        width: '85%'
    },
    left: {
        flexDirection: 'row',
    }
});
