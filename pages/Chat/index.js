import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, AsyncStorage, TextInput, Button, ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import withContext from '../../lib/withContext';
import styles from './style';
import Chat from './components/chat';

class ChatPage extends Component {
    navigation = this.props.navigation;
    state = {
        chats: [{
            id: 12,
            user: {
                id: 1,
                name: 'John',
                surname: 'Snow',
                nick: 'snow',
                avatar: 'https://manofmany.com/wp-content/uploads/2017/07/Jon-Snow-2.jpg'
            },
            messages: [{
                text: 'Hello my friend! I did not write you a long time. So sorry me please. I spent a lot of time for killing died people',
                time: new Date(),
            }]
        }, {
            id: 123,
            user: {
                id: 2,
                name: 'Dayeneris',
                surname: 'Targarien',
                nick: 'dragon',
                avatar: 'https://amp.thisisinsider.com/images/5989fc4eefe3df1f008b48b9-750-563.png'    
            },
            messages: [{
                text: 'Do you want to fly with my dragons?',
                time: new Date(),
            }]
        }, {
            id: 22,
            user: {
                id: 3,
                name: 'Sersea',
                surname: 'Lannister',
                nick: 'queen',
                avatar: 'https://historytime.ru/wp-content/uploads/2016/07/image-3.jpeg'
            },
            messages: [{
                text: 'I want to kill you man!!!',
                time: new Date(),
            }]
        }],
        addChatVisible: false
    }

    componentWillMount() {
        this.navigation.setParams({
            addChat: this.addChat
        });
    }

    addChat = () => {
        this.setState({
            addChatVisible: !this.state.addChatVisible
        });
    }

    onPressChat = (id) => {
        const chat = this.state.chats.find(a => a.id == id);
        this.navigation.navigate('ChatSingle', { chat });
    }

    render() {
        const user = this.props.context.state.user || {};
        return (
            <View style={styles.view}>
                <ScrollView contentContainerStyle={styles.container}>
                    {this.state.chats.length > 0 ?
                        this.state.chats.map(item => (
                            <Chat
                                user={item.user}
                                lastMessage={item.messages[item.messages.length - 1]}
                                key={item.user.id}
                                onPressChat={() => this.onPressChat(item.id)}
                            />
                        )) :
                        <Text style={styles.text}>You do not have some chat</Text>
                    }
                </ScrollView>
            </View>
        );
    }
}

export default withContext(ChatPage, ({navigation}) => {
    return {
        title: 'Chats',
        headerTitleStyle: {
            color: 'white'
        },
        headerRight: (
            <TouchableOpacity onPress={navigation.state.params && navigation.state.params.addChat}>
                <Ionicon name="md-add" size={30} style={{ marginRight: 13 }} color='white' />
            </TouchableOpacity>
        )
    }
});
