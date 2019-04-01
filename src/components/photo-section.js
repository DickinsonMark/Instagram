import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

export default class PhotoSection extends Component {
    render() {
        return (
            <View>
                {/* This is the User section */}
                <View>
                    <Image />
                    <Text></Text>
                </View>
                {/* This is the actual photo section */}
                <View>
                    <Image />
                </View>
                {/* This is the heart button */}
                <View>
                    <Button />
                </View>
                {/* This is the caption section */}
                <View>
                    <Text></Text>
                    <Text></Text>
                </View>
            </View>
        );
    }
}