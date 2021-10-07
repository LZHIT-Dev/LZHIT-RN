import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, StatusBar, TouchableOpacity, Image, TextInput, Text, Component } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

class syxySingle extends Component {
    render() {
        return (
            <>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <View style={styles.titleBar}>
            <Text style={styles.titleText}>设置</Text>
            <Text style={styles.hitokoto}>这里也许有你想了解的</Text>
          </View>
            </>
        )
    }
}

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
        marginBottom:20,
        fontSize: 20,
        fontWeight: 'bold',
      },
});

export default syxySingle;