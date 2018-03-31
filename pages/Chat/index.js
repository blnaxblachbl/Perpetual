import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, AsyncStorage, TextInput, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from './style';

class LoginPage extends Component {
    navigation = this.props.navigation;
    static navigationOptions = {
        title: 'Чаты',
        headerTitleStyle: {
            color: 'white'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: "80%" }}>
                    <TouchableOpacity style={styles.containerButton}>
                        <Text style={styles.textButton}>Chats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginPage;