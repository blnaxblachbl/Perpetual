import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, AsyncStorage, TextInput, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

class LoginPage extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            login: "",
            password: ""
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <View style={{ width: "80%" }}>
                    <TouchableHighlight style={styles.containerButton} onPress={() => { navigate("Tabs") }}>
                        <Text style={styles.textButton}>Войти</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 15,
        color: "white"
    },
    containerButton: {
        backgroundColor: "transparent",
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        overflow: 'hidden',
        width: "100%",
        height: 40,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: "center",
    }
});

export default LoginPage;