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
import { LoginButton, AccessToken } from 'react-native-fbsdk';

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

    handleFacebookLogin = async (error, result) => {
        if (error) {
            return console.error('ERROR on FB login', error);
        }
        if (result.isCancelled) {
            return;
        }
        try {
            this.setState({ loading: true })
            const data = await AccessToken.getCurrentAccessToken();
            const accessToken = data.accessToken.toString();
            const userID = data.userID;
            const request = await axios.get('https://graph.facebook.com/v2.12/me?fields=email,first_name,last_name,picture.width(640)&access_token=' + accessToken);
            const user = {
                _id: request.data.id,
                nick: request.data.email.split('@')[0],
                avatar: request.data.picture ? request.data.picture.data.url : null,
                name: request.data.first_name,
                surname: request.data.last_name
            }
            await Promise.all([
                AsyncStorage.setItem('user', JSON.stringify(user)),
                AsyncStorage.setItem('accessToken', accessToken)
            ])
            return this.navigation.navigate('Main');
        } catch (err) {
            return console.log(err);
        }
    }

    render() {
        if (this.state.loading) {
            return <Loader opacity={false}/>
        }
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Welcome to Perpertual</Text>
                <LoginButton
                    readPermissions={['public_profile', 'email']}
                    onLoginFinished={this.handleFacebookLogin}
                    style={styles.loginButton}
                />
            </View>
        );
    }
}

export default LoginPage;
