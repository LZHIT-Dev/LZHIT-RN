import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, TouchableOpacity, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card } from 'react-native-shadow-cards';

export default class App extends Component {
    render() {
        return (
            <View>
                <View style={styles.titleBar}>
                    <Text>1</Text>
                </View>
                <View style={styles.bodyArea}>
                    <Text>2</Text>
                </View>
            </View>
        );
    }
}

//Stylesheets
const styles = StyleSheet.create ({
    titleBar:{
        flex:0.5,
        backgroundColor: '#E9E9E9',
    },
    bodyArea:{
        flex:1.5,
        backgroundColor:'#FFFFFF',
    }
})