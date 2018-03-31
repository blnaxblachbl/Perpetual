import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import withContext from '../../lib/withContext';

class ChatSinglePage extends React.Component {
    navigation = this.props.navigation;
    state = {
        messages: [],
        
    }
    componentWillMount() {
        const chat = this.navigation.state.params;
        console.log(chat);
    }
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }
    render() {
        const user = this.props.context.state.user || {};
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={user}
            />
        )
    }
}

export default withContext(ChatSinglePage);