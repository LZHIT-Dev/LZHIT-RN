import React from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity, Text, ScrollView } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

const Syxy = () => {
    return (
        <>
            <ScrollView>
                <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>使用协议</Text>
                    <Text style={styles.hitokoto}>更新时间：2021年9月22日</Text>
                </View>
                <View style={styles.bodyBackground}>
                    <View style={styles.bodyContent}>
                        <View style={styles.manualTextGroup}>
                            <Text style={styles.manualText}>
                                《使用协议》（以下简称“协议”）及其条款，系您下载、安装及使用“在鹿山App”（简称：在鹿山）软件（以下简称“本软件”）所订立的、描述您与本软件之间权利义务的协议。
                            </Text>
                            <Text style={styles.manualText}>
                                在使用在鹿山前务必认真阅读本协议的内容、充分理解各条款内容，如有异议，您可选择不进入本软件。一旦您确认本用户注册协议后，本协议即在您和本软件之间产生法律效力，意味着您完全同意并接受协议的全部条款。请您审慎阅读并选择接受或不接受协议（未成年人应在法定监护人陪同下阅读）。
                            </Text>
                            <Text style={styles.manualText}>1.本软件保留因业务发展需要，单方面对其服务器所提供的全部或部分服务内容在任何时候不经任何通知的情况下变更、暂停、限制、终止或撤销服务的权利。
                            </Text>
                            <Text style={styles.manualText}>
                                2.本软件提供的服务中可能包含广告，用户同意在使用过程中显示本软件和第三方供应商、合作伙伴提供的广告。用户因就第三方提供的服务、产品与第三方产生争议的，由用户与第三方自行解决，本软件不承担责任。
                            </Text>
                            <Text style={styles.manualText}>
                                3.用户须对在本软件上所传送信息的真实性、合法性、有效性等负责，与用户所传播的信息相关的任何法律责任由用户自行承担，与本软件无关。用户在本软件中记录的或通过本软件服务所传送的任何内容并不反映本软件的观点或政策，本软件对此不承担责任。
                            </Text>
                            <Text style={styles.manualText}>
                                4.本软件的部分功能将产生资讯费用，具体资费标准以用户使用的电信运营商公布的价格为准，该部分费用应由用户自行承担。
                            </Text>
                        </View>
                    </View>
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
        marginBottom:30
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
export default Syxy;