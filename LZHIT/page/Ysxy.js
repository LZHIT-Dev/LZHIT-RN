import React from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity, Text, ScrollView } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

const Ysxy = () => {
    return (
        <>
            <ScrollView>
                <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>隐私申明</Text>
                    <Text style={styles.hitokoto}>更新时间：2021年9月22日</Text>
                </View>
                <View style={styles.bodyBackground}>
                    <View style={styles.bodyContent}>
                        <View style={styles.manualTextGroup}>
                            <Text style={styles.manualText}>
                                除了收集您必要的数据（应用崩溃原因、次数、您的手机型号、操作系统及其版本、您的IP所指地区）用于改良用户体验外，“在鹿山” APP 不会收集您的其他任何信息。
                            </Text>
                            <Text style={styles.manualText}>
                                若有任何问题与疑虑，欢迎发邮联系：tzh894895@gmail.com
                            </Text>
                        </View>
                    </View>
                    <Text style={{marginLeft:30,marginTop:280,fontSize:12,color:'#A9A9A9'}}>“在鹿山”App承诺</Text>
                    <Text style={{marginLeft:30,marginTop:5,marginBottom:50,fontSize:12,color:'#A9A9A9'}}>绝对不会收集用户任何隐私数据。</Text>
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
        marginLeft: 30,
        marginTop: 25,
        marginRight: 30,
        marginBottom: 30,
    },
    manualText: {
        marginTop: 5,
        fontSize: 15,
    },
});
export default Ysxy;