import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Touchable from '../components/Touchable'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { userName: '', distance: '' }
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.viewStyle}>
                <View>
                    <Text>User Name: </Text>
                    <Text>Distance (km): </Text>
                </View>
                <View style={styles.input_style} >
                    <TextInput placeholder="Enter your user name here"
                        onChangeText={(userName) => this.setState({ userName })} >
                    </TextInput>
                    <TextInput placeholder="to look for friends"
                        onChangeText={(distance) => this.setState({ distance })} >
                    </TextInput>
                </View>
                <View>
                    <Touchable title='Submit'
                        onPress={() => navigate('MyMap',
                            {
                                userName: this.state.userName,
                                distance: this.state.distance
                            })} />
                </View>

            </View>
        );
    }
}



const styles = StyleSheet.create({

    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input_style: {
        width: 200,
        height: 60
    }
})