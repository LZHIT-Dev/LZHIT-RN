import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, StatusBar, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const statusBarHeight = StatusBar.currentHeight;

const Jwxt = () => {
    const [url, setUrl] = useState('http://jwglxt.lzhit.edu.cn/jwglxt');
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
    return (
        <SafeAreaView style={{ flex: 1, marginTop: statusBarHeight }}>
            <View style={{ height: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                    style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setUrlInput(text)}
                    value={urlInput}
                />
                <Button title={"转到"} onPress={() => {
                    setUrl(urlInput);
                }} />
            </View>
            <WebView source={{ uri: url }}
                injectedJavaScript={`
                window.onload = function() {
                    var tags = document.getElementsByTagName("a");
                    for(var i = 0; i < tags.length; i++) {
                        tags[i].addEventListener('click', function (e) {
                            if(e.href.indexOf("forward.action") != -1) e.preventDefault();
                        })
                    };
                }
            `}
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, backgroundColor: 'white' }}>
                <Button title={"主页"} onPress={() => {
                    setUrl('http://www.baidu.com?t=' + new Date().getTime());
                }} />
                <Button title={"后退"} onPress={() => {
                    webView.goBack();
                }} />

                <Button title={"前进"} onPress={() => {
                    webView.goForward();
                }} />

                <Button title={"刷新"} onPress={() => {
                    webView.reload();
                }} />
            </View>

        </SafeAreaView>);
};

const styles = StyleSheet.create({
});

export default Jwxt;