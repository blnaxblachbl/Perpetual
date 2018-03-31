import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import Gun from 'gun/gun.min.js'

const gun = Gun('http://192.168.0.102:3000/gun');

function asyncGunGetUser(id) {
    return new Promise((resolve, reject) => {
        gun.get('users').get(id).val(data => {
            // console.log(data);
            resolve(data);
        })
    })
}

class ChatSingle extends React.Component {
    state = {
        user: {}
    }
    async componentWillMount() {
        const ids = this.props.ids.split('/');
        const sender = ids[1];
        const receiver = ids[0];
        if (sender == this.props.user._id) {
            const data = await asyncGunGetUser(receiver);
            this.setState({
                user: data
            })
        } else {
            const data = await asyncGunGetUser(sender);
            this.setState({
                user: data
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.left} onPress={this.props.onPressChat}>
                    {this.state.user.avatar ?
                        <Image source={{ uri: this.props.user.avatar }} style={styles.avatar} /> :
                        <Image source={require('../../../assets/profile.png')} style={styles.avatar} />
                    }
                    <View style={styles.message}>
                        <Text style={styles.nick}>{this.state.user.username}</Text>
                        <Text style={styles.lastMessage}>{this.props.lastMessage.user && this.props.lastMessage.user.username + ': '}{this.props.lastMessage.text.substring(0, 70)}...</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};

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
        marginBottom: 5,
        backgroundColor: 'white'
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

export default ChatSingle;