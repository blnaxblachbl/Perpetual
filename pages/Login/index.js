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
    TouchableHighlight,
    Platform
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
        tel: '',
        password: ''
    }

    login = () => {
        gun.get(this.state.tel + '@' + this.state.password).val(async (data) => {
            if (data == undefined) {
                alert("Error - invalid user data")
            } else if (data.username) {
                await AsyncStorage.setItem("userId", this.state.tel + '@' + this.state.password);
                this.navigation.navigate('Main');
            }
        })
    }

    render() {
        if (this.state.loading) {
            return <Loader opacity={false} />
        }
        let inputStyle = { color: "white" };
        if (Platform.OS == 'ios') {
            inputStyle = {
                color: "white",
                width: '80%',
                height: 50,
            }
        }
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Welcome to Perpertual</Text>
                <View style={{ width: "80%" }}>
                    <TextInput
                        onChangeText={(text) => { this.setState({ tel: text }) }}
                        placeholder='Phone'
                        placeholderTextColor="grey"
                        keyboardType="phone-pad"
                        underlineColorAndroid="grey"
                        autoFocus={false}
                        autoCorrect={false}
                        style={inputStyle}
                    />
                    <TextInput
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        placeholder='Password'
                        placeholderTextColor="grey"
                        underlineColorAndroid="grey"
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={inputStyle}
                    />
                    <TouchableHighlight style={styles.containerButton} onPress={() => { this.login() }}>
                        <Text style={{ color: "white" }}>
                            Sing in
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.containerButton} onPress={() => { this.navigation.navigate("RegistrPage") }}>
                        <Text style={{ color: "white" }}>
                            Sing up
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default LoginPage;
