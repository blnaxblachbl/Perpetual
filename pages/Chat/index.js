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
            _id: '12',
            user: {
                _id: '1',
                name: 'John',
                surname: 'Snow',
                nick: 'snow',
                avatar: 'https://manofmany.com/wp-content/uploads/2017/07/Jon-Snow-2.jpg'
            },
            messages: [{
                _id: '123123',
                text: 'Hello my friend! I did not write you a long time. So sorry me please. I spent a lot of time for killing died people',
                createdAt: new Date()
            }]
        }, {
            _id: '123',
            user: {
                _id: '2',
                name: 'Dayeneris',
                surname: 'Targarien',
                nick: 'dragon',
                avatar: 'https://amp.thisisinsider.com/images/5989fc4eefe3df1f008b48b9-750-563.png'    
            },
            messages: [{
                _id: '123123211',
                text: 'Do you want to fly with my dragons?',
                createdAt: new Date(),
            }]
        }, {
            _id: '22',
            user: {
                _id: '12112',
                name: 'Sersea',
                surname: 'Lannister',
                nick: 'queen',
                avatar: 'https://historytime.ru/wp-content/uploads/2016/07/image-3.jpeg'
            },
            messages: [{
                _id: '12328473',
                text: 'I want to kill you man!!!',
                createdAt: new Date(),
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
        const chat = this.state.chats.find(a => a._id == id);
        this.navigation.navigate('ChatSinglePage', {
            chat,
            addMessage: this.addMessage
        });
    }

    addMessage = (id, messages) => {
        const index = this.state.chats.findIndex(a => a._id == id);
        let chats = this.state.chats;
        chats[index].messages = messages;
        this.setState({
            chats
        });
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
                                lastMessage={item.messages[0]}
                                key={item.user._id}
                                onPressChat={() => this.onPressChat(item._id)}
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
