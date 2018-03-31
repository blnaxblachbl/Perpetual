import React, { Component } from 'react';
import axios from 'axios';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    Alert,
    AsyncStorage,
    TextInput,
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import publicIP from 'react-native-public-ip';

import Loader from '../../components/Loader';
import styles from './style';

class LoginPage extends Component {
    static navigationOptions = {
        header: null
    }
    navigation = this.props.navigation;
    state = {
        loading: false
    }

    loginAction = () => {
        const user = {
            _id: 'qweqwe123123',
            name: 'Petr',
            surname: 'Vasilev',
            nick: 'byokke',
        }
        AsyncStorage.setItem('user', JSON.stringify(user));
        return this.navigation.navigate('Main');
    }

    render() {
        if (this.state.loading) {
            return <Loader opacity={false}/>
        }
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Welcome to Perpertual</Text>
                <Button onPress={this.loginAction} title="Login" color="white" />
            </View>
        );
    }
}

export default LoginPage;
