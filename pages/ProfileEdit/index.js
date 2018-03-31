import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, Alert, AsyncStorage, TextInput, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons';

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


    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <View style={styles.textInput}>
                    <Text style={styles.mainText}>Nick</Text>    
                    <TextInput onChangeText={(nick)=> this.setState({nick})} value={this.state.nick}/>
                </View>    
                <View style={styles.textInput}>
                    <Text style={styles.mainText}>Name</Text>    
                    <TextInput onChangeText={(nick)=> this.setState({name})} value={this.state.name}/>
                </View>   
                <View style={styles.textInput}>
                    <Text style={styles.mainText}>Surname</Text>    
                    <TextInput onChangeText={(nick)=> this.setState({name})} value={this.state.name}/>
                </View>  
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={styles.containerButton} >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textButton}>Done</Text>
                    </View>
                    <View >
                        <Ionicon name="ios-arrow-forward" size={20}
                            color='white' />
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.containerButton} >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textButton}>Cancel</Text>
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

export default ProfileEditPage;