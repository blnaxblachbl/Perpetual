import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, Alert, AsyncStorage, TextInput, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons';

import styles from './style';

class ProfileEditPage extends Component {
    static navigationOptions = {
        title: 'Настройки профиля',
        headerTitleStyle: {
            color: 'white'
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}

export default ProfileEditPage;