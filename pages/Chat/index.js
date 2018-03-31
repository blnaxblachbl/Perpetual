import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, AsyncStorage, TextInput, Button, ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import withContext from '../../lib/withContext';
import styles from './style';
import Chat from './components/chat';

class ChatPage extends Component {
    navigation = this.props.navigation;

    componentWillMount() {
        this.navigation.setParams({
            addChat: this.addChat
        });
    }

    addChat = () => {
        this.navigation.navigate('CreateChatPage');
    }

    onPressChat = (id) => {
        const chat = this.props.context.state.chats.find(a => a._id == id);
        this.navigation.navigate('ChatSinglePage', {
            chat,
            username: chat.user.username
        });
    }
 
    render() {
        const user = this.props.context.state.user || {};
        return (
            <View style={styles.view}>
                <ScrollView contentContainerStyle={styles.container}>
                    {this.props.context.state.chats.length > 0 ?
                        this.props.context.state.chats.map(item => (
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
