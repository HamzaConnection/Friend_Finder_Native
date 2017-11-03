import React, {Component}from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Touchable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}