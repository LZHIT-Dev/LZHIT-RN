import React, { Component } from "react";
import {Text, View, StatusBar, Image, Alert, TouchableOpacity, Linking,ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const statusBarHeight = StatusBar.currentHeight;

export default class netWork extends Component {
    render(){
        return (
            <>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <WebView source={{uri: 'http://10.8.0.253/'}} style={{marginTop:statusBarHeight}}/>
            </>
        )
    }
}