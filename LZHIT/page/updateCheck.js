import React from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity, Text, ScrollView, Image} from 'react-native';
import path from 'react-native-path'
import Pgyer from 'react-native-pgyer-bridge';
import WebView from "react-native-webview";
import pathUtils from "react-navigation/src/routers/pathUtils";
const statusBarHeight = StatusBar.currentHeight;



const updateCheck = () => {
    return (
        <>
            <ScrollView>
                <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>检查更新</Text>
                    <Text style={styles.hitokoto}>在这里，随时获取最新版本</Text>
                </View>
                <View style={styles.bodyBackground}>
                    <View style={styles.bodyContent}>
                        <View style={styles.manualTextGroup}>
                        <WebView source={{uri:'https://inlushan.top/update/2_3.html'}} sharedCookiesEnabled={true} startInLoadingState={true} style={{height:400}}></WebView>
                        </View>
                    </View>
                    <Text style={{marginLeft:30,marginTop:30,marginBottom:20,fontSize:12,color:'#A9A9A9'}}>updateCheckServer V0.2.0</Text>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    titleBar: {
        flex: 2,
        backgroundColor: '#E9E9E9',
    },
    titleText: {
        fontSize: 40,
        fontWeight: '600',
        marginLeft: 30,
        marginTop: 110
    },
    hitokoto: {
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    bodyBackground: {
        flex: 5,
        backgroundColor: '#E9E9E9',
    },
    bodyContent: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 30
    },
    manualTextGroup: {
        marginTop: 25,
        marginBottom: 25,
    },
    manualText: {
        marginTop: 5,
        fontSize: 15,
    },
});
export default updateCheck;