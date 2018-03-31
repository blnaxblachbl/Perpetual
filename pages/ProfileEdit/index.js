import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, Alert, AsyncStorage, TextInput, Button, Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons';
import Gun from 'gun/gun.min.js';
import withContext from '../../lib/withContext';

import styles from './style';

class ProfileEditPage extends Component {
    navigation = this.props.navigation;
    constructor(props) {
        super(props);
        this.state = {
            nick: '',
            name: ''
        }
    }

    static navigationOptions = {
        title: 'Profile Edit',
        headerTitleStyle: {
            color: 'white'
        }
    }

    async componentDidMount() {
        const userId = await AsyncStorage.getItem('userId');
        try {
            let gun = new Gun('http://192.168.0.102:3000/gun');
            gun.get('users').get(userId).val((data) => {
                if (data) {
                    this.props.context.setUser({
                        _id: userId,
                        tel: data.tel,
                        username: data.username
                    });
                } else {
                    AsyncStorage.removeItem('userId');
                    return this.navigation.navigate('Auth');
                }
            });
        } catch (err) {
            console.log(err);
        }
    }


    render() {
        const { navigate } = this.props.navigation
        let inputStyle = { color: "white" };
        if (Platform.OS == 'ios') {
            inputStyle = {
                color: "white",
                width: '80%',
                height: 50,
            }
        }
        const user = this.props.context.state.user || {};
        return (
            <View style={styles.container}>
                <View style={styles.textInput}>
                    <Text style={styles.mainText}>Nick:</Text>
                    <TextInput onChangeText={(nick) => this.setState({ nick })} value={this.state.nick} style={inputStyle} />
                </View>
                <View style={styles.textInput}>
                    <Text style={styles.mainText}>Name:</Text>
                    <TextInput onChangeText={(nick) => this.setState({ name })} value={user.username} style={inputStyle} />
                </View>
                <View style={styles.textInput}>
                    <Text style={styles.mainText}>Surname:</Text>
                    <TextInput onChangeText={(nick) => this.setState({ name })} value={this.state.name} style={inputStyle} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 30, left: 5, right: 5, width: "90%" }}>
                    <TouchableOpacity style={styles.containerButton} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textButton}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerButton} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textButton}>Done</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ProfileEditPage;