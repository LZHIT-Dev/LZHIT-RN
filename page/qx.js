import React from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity, Text, ScrollView } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

const Qx = () => {
    return (
        <>
            <ScrollView>
                <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>权限使用情况</Text>
                    <Text style={styles.hitokoto}>更新时间：2021年9月22日</Text>
                </View>
                <View style={styles.bodyBackground}>
                    <View style={styles.bodyContent}>
                        <View style={styles.manualTextGroup}>
                            <Text style={styles.manualText}>
                            此应用使用到的您的权限：
                            </Text>
                            <Text style={styles.manualText}>
                            <Text style={{fontWeight: 'bold'}}>android.permission.INTERNET 互联网连接权限：</Text>这是保证在鹿山能够正常使用的必要权限。（系统默认给予）
                            </Text>
                            <Text style={styles.manualText}>
                            <Text style={{fontWeight: 'bold'}}>android.permission.WRITE_EXTERNAL_STORAGE 存储空间使用权限：</Text>这是保证在鹿山能够正常使用的必要权限。（系统默认给予）
                            </Text>
                            <Text style={styles.manualText}>
                            <Text style={{fontWeight: 'bold'}}>android.permission.ACCESS_NETWORK_STATE 获取手机网络状态权限：</Text>这是保证在鹿山能够正常使用的必要权限。（系统默认给予）
                            </Text>
                            <Text style={styles.manualText}>
                            <Text style={{fontWeight: 'bold'}}>android.permission.ACCESS_WIFI_STATE 获取手机 WiFi 状态权限：</Text>这是保证在鹿山能够正常使用的必要权限。（系统默认给予）
                            </Text>
                            <Text style={styles.manualText}>
                            <Text style={{fontWeight: 'bold'}}>android.permission.READ_PHONE_STATE 读取手机识别码权限：</Text>这是保证在鹿山能够正常使用的必要权限。（系统默认给予）
                            </Text>
                        </View>
                    </View>
                    <Text style={{marginLeft:30,marginTop:30,fontSize:12,color:'#A9A9A9'}}>“在鹿山”App承诺</Text>
                    <Text style={{marginLeft:30,marginTop:5,marginBottom:50,fontSize:12,color:'#A9A9A9'}}>绝对不会索要任何多余的、无关的权限。</Text>
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
export default Qx;