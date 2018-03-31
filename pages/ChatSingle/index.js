import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import withContext from '../../lib/withContext';

class ChatSinglePage extends React.Component {
    navigation = this.props.navigation;
    state = {
        messages: [],
        user: null,
        id: null
    }
    componentWillMount() {
        const data = this.navigation.state.params;
        let _data = data.chat.messages.map(item => {
            if (!item.user) {
                item['user'] = data.chat.user;
            }
            return item;
        });
        this.setState({
            messages: data.chat.messages,
            id: data.chat._id,
            user: data.chat.user
        })
    }
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }), () => {
            this.props.context.addMessage(this.state.id, this.state.messages, this.state.user);
        });
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
    const username = navigation.state.params.username;
    return {
        title: username,
        headerTitleStyle: {
            color: 'white'
        },
    }
});