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

    render() {
        if (this.state.loading) {
            return <Loader opacity={false}/>
        }
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Welcome to Perpertual</Text>
            </View>
        );
    }
}

export default LoginPage;
