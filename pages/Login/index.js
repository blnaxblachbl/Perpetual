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

import styles from './style';

class LoginPage extends Component {
    static navigationOptions = {
        header: null
    }
    navigation = this.props.navigation;
    state = {}

    handleLogin = () => {
        const { navigate } = this.props.navigation
        this.navigation.navigate('Main');
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                </View>
                <View style={{ width: "80%" }}>
                    <TouchableOpacity style={styles.containerButton} onPress={this.handleLogin}>
                        <Text style={styles.textButton}>Войти</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginPage;