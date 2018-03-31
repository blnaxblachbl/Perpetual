import React from 'react';
import { Text, View, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ChatsPage from '../pages/Chat';
import ProfilePage from '../pages/Profile';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

TabStack = (val) => {
    const TabStack = StackNavigator(
        {
            ChatsPage: {
                screen: ChatsPage
            },
            ProfilePage: {
                screen: ProfilePage,
            }
        }, {
            initialRouteName: val,
            navigationOptions: {
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,   
                    backgroundColor: '#000',
                    borderBottomColor: 'black'
                }
            }
        }
    )

    return TabStack;
}

export default TabNavigator({
    Chats: {
        screen: this.TabStack("ChatsPage"),
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                    name="ios-chatbubbles"
                    size={27}
                    color={tintColor}
                />
            ),
        },
    },
    Profile: {
        screen: this.TabStack("ProfilePage"),
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesomeIcon
                    name="user-circle"
                    size={23}
                    color={tintColor}
                />
            ),
        },
    },
},
    {
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            inactiveTintColor: "white",
            activeTintColor: "#6da2f9",
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
        swipeEnabled:  Platform.OS == 'ios' ? true : false,
<<<<<<< HEAD:routers/main.js
<<<<<<< HEAD:routers/main.js
        animationEnabled: Platform.OS == 'ios' ? true : false,
        swipeEnabled:  Platform.OS == 'ios' ? true : false,
        animationEnabled: Platform.OS == 'ios' ? true : false,
        swipeEnabled:  Platform.OS == 'ios' ? true : false,
=======
>>>>>>> master:routers/main.js
=======
>>>>>>> master:routers/main.js
        animationEnabled: Platform.OS == 'ios' ? true : false
    }
);
