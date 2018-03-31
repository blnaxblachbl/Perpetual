import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, AsyncStorage, TextInput, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from './style';
import publicIP from 'react-native-public-ip'

import Gun from 'gun/gun.min.js';
//var Gun = require("gun/gun.min.js");
//import 'gun-asyncstorage'

const data = {title: "Tit", age: 23}

class LoginPage extends Component {
    navigation = this.props.navigation;
    static navigationOptions = {
        title: 'Чаты',
        headerTitleStyle: {
            color: 'white'
        }
    }

    lol() {
        let gun = new Gun('http://192.168.0.102:3000/gun');
        //gun.put(data);
        gun.get("jff3enovv2f8NpX2FeGi").on((data)=>{
            alert(data.title + ", " + data.age)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: "80%" }}>
                    <TouchableOpacity onPress={() => { this.lol() }} style={styles.containerButton}>
                        <Text style={styles.textButton}>Chats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginPage;