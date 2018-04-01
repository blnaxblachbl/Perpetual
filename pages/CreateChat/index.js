import React from 'react';
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import withContext from '../../lib/withContext';
import styles from './style';
import Gun from 'gun/gun.min.js'

function makeid(user1, user2) {
    return `${user1}/${user2}`;
}

const gun = Gun('http://192.168.0.102:3000/gun');

class CreateChat extends React.Component {
    state = {
        searchValue: '',
        searched: [],
        chats: [],
        users: []
    }

    navigation = this.props.navigation;

    componentWillMount() {
        const chats = this.props.context.state.chats;
        let arr = [];
        let users = [];
        gun.get('users').val(async (data) => {
            arr = Object.keys(data);
            for (let i = 1; i < arr.length; i += 1) {
                gun.get('users').get(arr[i]).val(data => {
                    let a = data;
                    a['_id'] = arr[i];
                    users.push(a);
                    let b = this.state.users;
                    b.push(a);
                    this.setState({
                        users: b
                    })
                })
            }
        });
        this.setState({ chats });
    }

    onChange = async (searchValue) => {
        if (this.state.users.length > 0) {
            let users1 = this.state.users.filter(item => {
                try {
                    return item.username.includes(searchValue) && item._id != this.props.context.state.user._id;
                } catch (err) {
                    console.log(err);
                    return false
                }
            });
            if (searchValue.length > 0) {
                this.setState({ 
                    searchValue
                });
                const arr1 = users1.filter(item => {
                    if (item) {
                        return this.state.chats.findIndex(a => {
                            let splitted = a._id.split('/');
                            if (splitted[0] != item._id && splitted[1] != item._id) {
                                return false;
                            } else {
                                return true;
                            }
                        }) < 0;
                    } else {
                        return false;
                    }
                })
                this.setState({
                    searched: arr1
                });
            } else {
                this.setState({ 
                    searchValue,
                    searched: []
                });
            }
        }
    }

    createChat = (user) => {
        // const chat = {
        //     _id: makeid(user._id, this.props.context.state.user._id),
        //     user,
        //     messages: []
        // }
        this.navigation.navigate('ChatSinglePage', {
            // chat,
            // username: chat.user.username
            id: makeid(user._id, this.props.context.state.user._id),
            userId: user._id
        });
    }

    render() {
        return (
            <View style={{ backgroundColor: '#212121', flex: 1, height: '100%' }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.onChange}
                        value={this.state.searchValue}
                        placeholder="Type user which want to create conversation"
                        placeholderTextColor="gray"
                    />
                    { this.state.searched.map(item => (
                        <TouchableOpacity style={styles.user} key={item._id} onPress={() => this.createChat(item)}>
                            { item.avatar ?
                                <Image source={{ uri: item.avatar }} style={styles.avatar} /> :
                                <Image source={require('../../assets/profile.png')} style={styles.avatar} />
                            }
                            <View style={styles.data}>
                                <Text style={styles.nick}>{item.username}</Text>
                            </View>
                        </TouchableOpacity>
                    )) }
                </ScrollView>
            </View>
        )
    }
}

export default withContext(CreateChat, {
    title: 'Create chat',
    headerTitleStyle: {
        color: 'white'
    }
})