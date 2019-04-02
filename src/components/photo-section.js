import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

export default class PhotoSection extends Component {
    render() {
        return (
            <View>
                {/* This is the User section */}
                <View>
                    <Image 
                        style={styles.userAvatar}
                        source={{uri: 'https://www.icmagroup.org/assets/repo-faq-1-400x299.jpg'}} />
                    <Text>Username</Text>
                </View>
                {/* This is the actual photo section */}
                <View>
                    <Image 
                        style={styles.mainPhoto}
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/OperationRepo.jpg/250px-OperationRepo.jpg'}} />
                </View>
                {/* This is the heart button */}
                <View>
                    <Button title='Heart'/>
                </View>
                {/* This is the caption section */}
                <View>
                    <Text>Username</Text>
                    <Text>some caption</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    userAvatar: {
        width: 50,
        height: 50
    },
    mainPhoto: {
        width: null,
        height: 400
    }
}