import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

export default class PhotoSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* This is the User section */}
                <View style={styles.thumbnailSection}>
                    <Image 
                        style={styles.thumbnail}
                        source={{uri: 'https://www.icmagroup.org/assets/repo-faq-1-400x299.jpg'}} />
                    <View style={styles.userContainer}>
                        <Text>Username</Text>
                    </View>
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
                <View style={styles.imageMeta}>
                    <Text style={styles.username}>Username</Text>
                    <Text>some caption</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        margin: 10
    },
    thumbnailSection: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userContainer: {
        justifyContent: 'center',
        padding: 5
    },
    mainPhoto: {
        width: null,
        height: 400
    },
    imageMeta: {
        flexDirection: 'row',
        paddingRight: 5,
    },
    username: {
        fontWeight: 'bold',
        paddingRight: 5
    }
}