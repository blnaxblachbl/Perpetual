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

function makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

const fakeData = [{
    _id: '1123',
    username: 'Aria Start',
    avatar: 'https://24smi.org/public/media/resize/660x-/person/2018/01/22/849nmznb1b67-aria-stark.jpg'
}, {
    _id: '3232323',
    username: 'Sansa Start',
    avatar: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/74/SophieTurnerasSansaStark.jpg/267px-SophieTurnerasSansaStark.jpg'
}, {
    _id: '12112',
    username: 'Sersea Lannister',
    avatar: 'https://historytime.ru/wp-content/uploads/2016/07/image-3.jpeg'
}];

const gun = Gun('http://192.168.0.102:3000/gun');

class CreateChat extends React.Component {
    state = {
        searchValue: '',
        searched: [],
        chats: []
    }

    navigation = this.props.navigation;

    componentWillMount() {
        const chats = this.props.context.state.chats;
        this.setState({ chats });
    }

    onChange = async (searchValue) => {
        gun.get()
        if (searchValue.length > 0) {
            this.setState({ 
                searchValue
            });
            const arr = fakeData.filter(item => {
                return this.state.chats.findIndex(a => a.user._id == item._id) < 0;
            })
            this.setState({
                searched: arr
            });
        } else {
            this.setState({ 
                searchValue,
                searched: []
            });
        }
    }

    createChat = (user) => {
        const chat = {
            _id: makeid(),
            user,
            messages: []
        }
        this.navigation.navigate('ChatSinglePage', {
            chat,
            username: chat.user.username
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