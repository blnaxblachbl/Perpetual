import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { AsyncStorage, StatusBar, View } from 'react-native';

import Main from './routers/main';
import Auth from './routers/auth';

export default class App extends Component {
    state = {
        signedIn: false,
        checkedSignIn: false,
        user: null
    }
    async componentWillMount() {
        const user = await AsyncStorage.getItem('user');
        if (!user) {
            return this.setState({
                signedIn: false,
                checkedSignIn: true,
                user: null
            });
        }
        try {
            return this.setState({
                signedIn: true,
                checkedSignIn: true,
                user: JSON.parse(user)
            });
        } catch (err) {
            console.error(err);
        }
    }
    render() {
        const { checkedSignIn, signedIn } = this.state;
        if (!checkedSignIn) {
            return null;
        }
        const Layout = createRootNavigator(signedIn);
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content"/>
                <Layout onNavigationStateChange={null}/>
            </View>
        );
    }
}


const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
      {
          Main: {
              screen: Main,
              navigationOptions: {
                  gesturesEnabled: false
              }
          },
          Auth: {
              screen: Auth,
              navigationOptions: {
                  gesturesEnabled: false
              }
          }
      },
      {
          headerMode: 'none',
          mode: 'modal',
          initialRouteName: signedIn ? 'Main' : 'Auth',
      }
  );
};