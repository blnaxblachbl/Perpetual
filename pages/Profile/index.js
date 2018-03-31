import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, AsyncStorage, TextInput, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import style from './style';

class LoginPage extends Component {
    static navigationOptions = {
        title: 'Профиль',
        headerTitleStyle: {
            color: 'white'
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <View style={{ width: "80%" }}>
                    <TouchableOpacity style={styles.containerButton}>
                        <Text style={styles.textButton}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginPage;