import React from 'react';
import { View } from 'react-native';

export const Context = React.createContext()

const fakeData = [{
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
        createdAt: new Date(),
        user: {
            _id: '1',
            name: 'John',
            surname: 'Snow',
            nick: 'snow',
            avatar: 'https://manofmany.com/wp-content/uploads/2017/07/Jon-Snow-2.jpg'
        },
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
        user: {
            _id: '2',
            name: 'Dayeneris',
            surname: 'Targarien',
            nick: 'dragon',
            avatar: 'https://amp.thisisinsider.com/images/5989fc4eefe3df1f008b48b9-750-563.png'    
        },
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
        user: {
            _id: '12112',
            name: 'Sersea',
            surname: 'Lannister',
            nick: 'queen',
            avatar: 'https://historytime.ru/wp-content/uploads/2016/07/image-3.jpeg'
        },
    }]
}]

class Provider extends React.Component {
    state = {
        user: null,
        chats: []
    }

    componentDidMount() {
        this.setState({
            chats: fakeData
        })
    }

    setUser = (data) => {
        this.setState({
            user: data
        });
    }

    addMessage = (id, messages, user) => {
        const index = this.state.chats.findIndex(a => a._id == id);
        if (index > -1) {
            let chats = this.state.chats;
            chats[index].messages = messages;
            this.setState({
                chats
            });
        } else {
            let chats = this.state.chats;
            chats.unshift({
                _id: id,
                user,
                messages
            });
            this.setState({
                chats
            })
        }
    }
    
    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                setUser: this.setUser,
                addMessage: this.addMessage
            }}>
                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
            </Context.Provider>
        )
    }
};

export default Provider;
