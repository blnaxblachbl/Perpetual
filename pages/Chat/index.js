import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, AsyncStorage, TextInput, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import withContext from '../../lib/withContext';
import styles from './style';

class ChatPage extends Component {
    navigation = this.props.navigation;

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: "80%" }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Here must be chats</Text>
                </View>
            </View>
        );
    }
}

export default withContext(ChatPage, {
    title: 'Chats',
    headerTitleStyle: {
        color: 'white'
    }
});
