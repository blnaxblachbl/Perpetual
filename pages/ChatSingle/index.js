import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import withContext from '../../lib/withContext';
import Gun from 'gun/gun.min.js'

const gun = Gun('http://192.168.0.102:3000/gun');


class ChatSinglePage extends React.Component {
    navigation = this.props.navigation;
    state = {
        messages: [],
        user: null,
        id: null
    }
    componentWillMount() {
        // const data = this.navigation.state.params;
        // let _data = data.chat.messages.map(item => {
        //     if (!item.user) {
        //         item['user'] = data.chat.user;
        //     }
        //     return item;
        // });
        // this.setState({
        //     messages: data.chat.messages,
        //     id: data.chat._id,
        //     user: data.chat.user
        // })
        const id = this.navigation.state.params.id;
        let user = null;
        if (this.navigation.state.params.userId) {
            user = this.navigation.state.params.userId;
        }
        this.setState({
            id,
            user
        });
        gun.get('chats').get(id).on(data => {
            this.setState({
                messages: []
            })
            try {
                const d = JSON.parse(data);
                this.setState({
                    messages: d.messages
                })
            } catch (err) {
                console.log(err);
            }
        })
    }
    onSend(messages = []) {
        const message1 = GiftedChat.append(this.state.messages, messages);
        this.props.context.addMessage(this.state.id, message1, this.state.user);
        this.props.context.refreshPage();
    }
    render() {
        const user = this.props.context.state.user || {};
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={user}
                renderAvatar={null}
                bottomOffset={75}
            />
        )
    }
}

export default withContext(ChatSinglePage, ({navigation}) => {
    // const username = navigation.state.params.username;
    return {
        title: 'Чат',
        headerTitleStyle: {
            color: 'white'
        },
    }
});