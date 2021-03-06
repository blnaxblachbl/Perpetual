import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Gun from 'gun/gun.min.js';
import withContext from '../../lib/withContext';

import styles from './style';

class Profile extends Component {
    navigation = this.props.navigation;

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

    handleLogout = () => {
        Alert.alert('Logout', 'Are you sure?', [{
            text: 'Yes',
            onPress: async () => {
                await Promise.all([
                    AsyncStorage.removeItem('userId'),
                ]);
                this.props.context.clearState();
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
                        {user.avatar ?
                            <Image source={{ uri: user.avatar }} style={styles.avatar} /> :
                            <Image source={require('../../assets/profile.png')} style={styles.avatar} />
                        }
                    </View>
                    <View style={styles.nameInfoContainer}>
                        <Text style={styles.mainText}>{user.username}</Text>
                        <Text style={styles.mainText}>{user.tel} {user.surname}</Text>
                    </View>
                    <TouchableOpacity style={styles.containerEditButton} onPress={() => this.navigation.navigate('ProfileEdit')} >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textButton}>Edit</Text>
                    </View>
                    <View >
                    </View>
                </TouchableOpacity>
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
