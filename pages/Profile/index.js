import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { LoginManager } from 'react-native-fbsdk'
import withContext from '../../lib/withContext';

import styles from './style';

class Profile extends Component {
    navigation = this.props.navigation;

    async componentDidMount() {
        const [ userString, accessToken ] = await Promise.all([
            AsyncStorage.getItem('user'),
            AsyncStorage.getItem('accessToken')
        ]);
        try {
            const user = JSON.parse(userString);
            this.props.context.setUser(user);
        } catch (err) {
            console.log(err);
        }
    }

    handleLogout = () => {
        Alert.alert('Logout', 'Are you sure?', [{
            text: 'Yes',
            onPress: async () => {
                await Promise.all([
                    LoginManager.logOut(),
                    AsyncStorage.removeItem('user'),
                    AsyncStorage.removeItem('accessToken')
                ]);
                return this.navigation.navigate('Auth');
            }
        }, {
            text: 'No'
        }])
    }

    render() {
        const user = this.props.context.state.user || {};
        return (
            <View style={styles.container}>
                <View style={{ width: "80%" }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>
                        ID: {user.id}
                    </Text>
                    <Text style={{ textAlign: 'center', color: 'white' }}>
                        Nick: {user.nick}
                    </Text>
                    <Text style={{ textAlign: 'center', color: 'white' }}>
                        First Name: {user.name}
                    </Text>
                    <Text style={{ textAlign: 'center', color: 'white' }}>
                        Last Name: {user.surname}
                    </Text>
                    <TouchableOpacity style={styles.containerButton} onPress={this.handleLogout}>
                        <Text style={styles.textButton}>Выйти</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default withContext(Profile, {
    title: 'Profile',
    headerTitleStyle: {
        color: 'white'
    }
});