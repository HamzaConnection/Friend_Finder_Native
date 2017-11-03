import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView from 'react-native-maps';



export default class MyMap extends Component {
    render() {
        let parentProps = this.props.navigation.state.params; 
        return (
            
            <MapView
             style = {{height : 200 , margin : 40}}
            showsUserLocation = {true}
            />
        );
    }
}
