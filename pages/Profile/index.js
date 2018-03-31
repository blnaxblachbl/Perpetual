import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
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
                <View style={styles.infoContainer}>
                    <View style={styles.avatarContainer}>
                        { user.avatar ?
                            <Image source={{ uri: user.avatar }} style={styles.avatar} /> :
                            <Image source={require('../../assets/profile.png')} style={styles.avatar} />
                        }
                    </View>
                    <View style={styles.nameInfoContainer}>
                        <Text style={styles.mainText}>{user.nick}</Text>
                        <Text style={styles.mainText}>{user.name} {user.surname}</Text>
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
                    <TouchableOpacity style={styles.containerButton} onPress={this.handleLogout}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.iconContainer}>
                                <Ionicon name="md-log-out" size={20}
                                    color='white' />
                            </View>
                            <Text style={styles.textButton}>Logout</Text>
                        </View>
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
