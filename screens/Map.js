import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView from 'react-native-maps';


export default class MyMap extends Component {
    
    constructor(props)
    {
        super(props);
        let parentProps = this.props.navigation.state.params; 
        fetch('https://localhost:3000/register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userName : parentProps.userName,
              distance : parentProps.distance,
              coordinates : navigator.geolocation.getCurrentPosition()
            })
          })
    }
    
    render() {
        
        return (
            
            <MapView
             style = {{height : 200 , margin : 40}}
            showsUserLocation = {true}
            />
        );
    }
}
