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
    Button,
    TouchableHighlight
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Gun from 'gun/gun.min.js'

import Loader from '../../components/Loader';
import styles from './style';

const gun = Gun('http://192.168.0.102:3000/gun');

class LoginPage extends Component {
    static navigationOptions = {
        header: null
    }
    navigation = this.props.navigation;
    state = {
        loading: false,
        tel: '89991740248',
        password: '123123'
    }

    reg = () => {
        gun.get(this.state.tel + '@' + this.state.password).put({ name: 'bairock' })
    }

    login = () => {
        gun.get(this.state.tel + '@' + this.state.password, (data) => {
            alert(data.username)
        })
    }

    render() {
        if (this.state.loading) {
            return <Loader opacity={false} />
        }
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Welcome to Perpertual</Text>
                <View style={{ width: "80%" }}>
                    <TextInput
                        onChangeText={(text) => { this.setState({ login: text }) }}
                        placeholder='Телефон'
                        placeholderTextColor="rgb(213,173,109)"
                        keyboardType="phone-pad"
                        underlineColorAndroid="grey"
                        autoFocus={false}
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                    <TextInput
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        placeholder='Пароль'
                        placeholderTextColor="rgb(213,173,109)"
                        underlineColorAndroid="grey"
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                    <TouchableHighlight style={styles.containerButton} onPress={() => { this.login() }}>
                        <Text>
                            Войти
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default LoginPage;
