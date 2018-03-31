import React from 'react';
import { View } from 'react-native';

export const Context = React.createContext()

class Provider extends React.Component {
    state = {
        user: null
    }

    setUser = (data) => {
        this.setState({
            user: data
        });
    }
    
    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                setUser: this.setUser
            }}>
                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
            </Context.Provider>
        )
    }
};

export default Provider;
