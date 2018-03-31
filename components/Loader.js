import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default (props) => (
    <View style={{
        flex: 1,
        opacity: props.opacity == false ? 1 : 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }}>
        <ActivityIndicator
            color="white"
            size="large"
        />
    </View>
)