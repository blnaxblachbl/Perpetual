import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, Alert, AsyncStorage, TextInput, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons';

import styles from './style';

class LoginPage extends Component {
    static navigationOptions = {
        title: 'Профиль',
        headerTitleStyle: {
            color: 'white'
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.avatarContainer}>
                        <Image source={require('./icons/profile.png')} style={styles.avatar} />
                    </View>
                    <View style={styles.nameInfoContainer}>
                        <Text style={styles.mainText}>User</Text>
                        <Text style={styles.mainText}>User</Text>
                    </View>
                </View>
                <View style={{ width: "90%", justifyContent: 'center', alignContent: 'center' }}>
                    <TouchableOpacity style={styles.containerButton}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.iconContainer}>
                                <Ionicon name="md-photos" size={20}
                                    color='white' />
                            </View>
                            <Text style={styles.textButton}>Photos</Text>
                        </View>
                        <View >
                            <Ionicon name="ios-arrow-forward" size={20}
                                color='white' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerButton}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.iconContainer}>
                                <Ionicon name="md-videocam" size={20}
                                    color='white' />
                            </View>
                            <Text style={styles.textButton}>Video</Text>
                        </View>
                        <View >
                            <Ionicon name="ios-arrow-forward" size={20}
                                color='white' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerButton}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.iconContainer}>
                                <Ionicon name="md-musical-note" size={20}
                                    color='white' />
                            </View>
                            <Text style={styles.textButton}>Audio</Text>
                        </View>
                        <View >
                            <Ionicon name="ios-arrow-forward" size={20}
                                color='white' />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginPage;