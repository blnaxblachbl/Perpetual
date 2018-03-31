import React from 'react';
import { View, AsyncStorage } from 'react-native';

export const Context = React.createContext()
import Gun from 'gun/gun.min.js'

const gun = Gun('http://192.168.0.102:3000/gun');

class Provider extends React.Component {
    state = {
        user: null,
        chats: [],
        loading: false
    }

    componentDidMount() {
        this.refreshPage();
    }

    refreshPage = async () => {
        this.setState({
            chats: [],
            loading: true
        })
        const id = await AsyncStorage.getItem('userId');
        gun.get('users').get(id).get('chats').val(item => {
            const values = Object.values(item);
            for (let i = 1; i < values.length; i += 1) {
                // gun.get('chats').get(values[i]).val(item => {
                //     try {
                //         const d = JSON.parse(item);
                //         let arr = this.state.chats;
                //         arr.push(d);
                //         this.setState({
                //             chats: arr
                //         })
                //     } catch (err) {
                //         console.log(err);
                //     }
                // })
                gun.get('chats').get(values[i]).on(data => {
                    try {
                        const d = JSON.parse(data);
                        let arr = this.state.chats;
                        let index = arr.findIndex(a => a._id == d._id);
                        if (index > -1) {
                            arr[index] = d;
                        } else {
                            arr.push(d);
                        }
                        this.setState({
                            chats: arr
                        })
                    } catch (err) {
                        console.log(err);
                    }
                })
            }
            this.setState({
                loading: false
            })
        });
    }

    setUser = (data) => {
        this.setState({
            user: data
        });
    }

    addMessage = (id, messages, user) => {
        const index = this.state.chats.findIndex(a => a._id == id);
        if (index > -1) {
            // let chats = this.state.chats;
            // chats[index].messages = messages;
            // this.setState({
            //     chats
            // });
            const data = {
                _id: id,
                messages
            }
            gun.get('chats').get(id).put(JSON.stringify(data));
        } else {
            // let chats = this.state.chats;
            const data = {
                _id: id,
                messages
            };
            // chats.unshift(data);
            // this.setState({
            //     chats
            // });
            gun.get('chats').get(id).put(JSON.stringify(data));
            gun.get('users').get(this.state.user._id).get('chats').set(id);
            gun.get('users').get(user).get('chats').set(id);
        }
    }

    clearState = () => {
        this.setState({
            user: null,
            chats: []
        })
    }
    
    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                setUser: this.setUser,
                addMessage: this.addMessage,
                clearState: this.clearState,
                refreshPage: this.refreshPage
            }}>
                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
            </Context.Provider>
        )
    }
};

export default Provider;
