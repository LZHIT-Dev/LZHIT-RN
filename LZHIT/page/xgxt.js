import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';

const statusBarHeight = StatusBar.currentHeight;

const xgxt = () => {
    const [url, setUrl] = useState('http://xgxt.lzhit.edu.cn/xsfw/sys/emaphome/portal/index.do');
    const [webView, setWebview] = useState(null);
    const [urlInput, setUrlInput] = useState(url);

    //页面加载完成触发
    const webViewOnLoad = (syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        const curl = nativeEvent.url;
        //根据url地址判断刚才已经完成什么操作
        const jmurl = decodeURIComponent(curl);
        setUrlInput(jmurl);
        console.log("网页加载完成，地址是：" + jmurl)
    };

    //接收web发送过来的信息
    const onMessage = (event) => {
        const rep = event.nativeEvent.data;
        //console.log('-----------webview返回结果--------------');
        let minLog = rep;
        if (rep.length > 300) {
            minLog = rep.substring(0, 290);    //日志太长影响观感
        }
        console.log(minLog);
    };

    let jsCode = `(
        var aNodes = document.getElementsByTagName('a');

for (var i = 0; i < aNodes.length; i++) {
    aNodes[i].addEventListener('click', function (e) {
       e.preventDefault();
   })
}
    )`;
    return (
        <SafeAreaView style={{ flex: 1, marginTop: statusBarHeight }}>
            <WebView source={{ uri: url }}
                javaScriptEnabledAndroid={true}
                injectJavaScript={jsCode}
                ref={(webView) => (setWebview(webView))}
                sharedCookiesEnabled={true}
                startInLoadingState={true}
                onLoad={webViewOnLoad}
                onMessage={onMessage}
                onError={syntheticEvent => {
                    const { nativeEvent } = syntheticEvent;
                    console.log('网络连接失败！');
                    console.warn('WebView error: ', nativeEvent);
                }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 60, backgroundColor: 'white' }}>
                <TouchableOpacity onPress={() => { webView.goBack(); }}>
                    <Image source={require('../resource/images/goBack.png')} style={{ width: 40, height: 40, marginTop: 10, marginBottom: 10, marginLeft: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { webView.reload(); }}>
                    <Image source={require('../resource/images/refresh.png')} style={{ width: 40, height: 40, marginTop: 10, marginBottom: 10, }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { webView.goForward(); }}>
                    <Image source={require('../resource/images/goForward.png')} style={{ width: 40, height: 40, marginTop: 10, marginBottom: 10, marginRight: 40 }} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>);
};

const styles = StyleSheet.create({
});

export default xgxt;