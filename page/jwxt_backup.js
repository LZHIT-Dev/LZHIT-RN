import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Linking, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';

const statusBarHeight = StatusBar.currentHeight;

_injectJavaScript = () => `
var a = document.getElementsByTagName('a');
for(var i = 0; i < a.length; i++){
    a[i].onclick = function (event) {
        window.postMessage(this.href);
        event.preventDefault();
    }
}
`

_onMessage = (e) => {
Linking.openURL(e.nativeEvent.data).catch(err => console.error('An error occurred', err))
}

const Jwxt = () => {
    const [url, setUrl] = useState('http://jwglxt.lzhit.edu.cn/jwglxt/xtgl/');
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
    return (
        <SafeAreaView style={{ flex: 1, marginTop: statusBarHeight }}>
            <WebView source={{ uri: url }}
                ref={(webView) => (setWebview(webView))}
                sharedCookiesEnabled={true}
                startInLoadingState={true}
                onLoad={webViewOnLoad}
                onMessage={this._onMessage}
                injectedJavaScript={this._injectJavaScript}
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

export default Jwxt;