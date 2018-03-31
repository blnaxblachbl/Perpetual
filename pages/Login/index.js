import React, { Component } from 'react';
import {
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
import Gun from 'gun/gun.min.js';
import styles from './style';

class LoginPage extends Component {
    static navigationOptions = {
        header: null
    }
    navigation = this.props.navigation;
    state = {
        login: "",
        password: ""
    }

    handleLogin = () => {
        const { navigate } = this.props.navigation
        let gun = new Gun('http://192.168.0.102:3000/gun');
        fetch(
            "http://192.168.0.102:3000/createUser",
            {
                method: "POST",
                body: JSON.stringify({ user: this.state.login, password: this.state.password })
            }
        ).then(data => {
           return null 
        })
        //this.navigation.navigate('Main');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: "80%" }}>
                    <TextInput
                        onChangeText={(text) => { this.setState({ login: text }) }}
                        placeholder='Name'
                        placeholderTextColor="white"
                        underlineColorAndroid="grey"
                        autoFocus={false}
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                    <TextInput
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        placeholder='Password'
                        placeholderTextColor="white"
                        underlineColorAndroid="grey"
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                    <TouchableOpacity style={styles.containerButton} onPress={this.handleLogin}>
                        <Text style={styles.textButton}>Войти</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginPage;