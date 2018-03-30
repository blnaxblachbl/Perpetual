import React from 'react';
import { Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginPage from '../pages/loginPage';
import ChatsPage from '../pages/chatsPage';
import ProfilePage from '../pages/profilePage';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const stackNavigatorConfig = {
    initialRouteName: 'LoginPage',
};

TabStack = (val) => {
    const TabStack = StackNavigator(
        {
            ChatsPage: {
                screen: ChatsPage
            },
            ProfilePage: {
                screen: ProfilePage
            }
        }, {
            initialRouteName: val
        }
    )

    return TabStack;
}



const Tabs = TabNavigator({
    Chats: {
        screen: this.TabStack("ChatsPage"),
        navigationOptions: {
            tabBarLabel: () => (
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: "white"
                    }}
                >
                    Chats
                </Text>
            ),
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                    name="ios-chatbubbles"
                    size={27}
                    color="white"
                />
            ),
        },
    },
    Profile: {
        screen: this.TabStack("ProfilePage"),
        navigationOptions: {
            tabBarLabel: () => (
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: "white"
                    }}
                >
                    Profile
                </Text>
            ),
            tabBarIcon: ({ tintColor }) => (
                <FontAwesomeIcon
                    name="user-circle"
                    size={23}
                    color="white"
                />
            ),
        },
    },
},
    {
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            inactiveTintColor: "#babdc2",
            activeTintColor: "#fff",
            style: {
                backgroundColor: "#000",
                justifyContent: "center"
            },
            indicatorStyle: {
                height: 0
            }
        },
        navigationOptions: {
            header: null
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false
    }
);

export default StackNavigator({
    LoginPage: {
        screen: LoginPage,
    },
    Tabs: {
        screen: Tabs
    },
}, stackNavigatorConfig);
