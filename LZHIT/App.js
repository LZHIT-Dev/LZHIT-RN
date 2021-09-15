import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, TouchableOpacity, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card } from 'react-native-shadow-cards';

export default class App extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>在鹿山</Text>
          <Text style={styles.hitokoto}>这里是一言</Text>
        </View>
        <View style={styles.bodyContent}>
          <View style={styles.group1}>
            <Text style={styles.group1Text}>
              教务相关
            </Text>
            <View style={styles.imageBtnArea}>
              <TouchableOpacity onPress={() => { Linking.openURL('http://xgxt.lzhit.edu.cn/xsfw/sys/emaphome/portal/index.do') }}>
                <Image source={require('./resource/images/btn_glxt.png')} style={styles.imageBtn} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { Linking.openURL('http://jwglxt.lzhit.edu.cn/jwglxt/xtgl/index_initMenu.html#') }}>
                <Image source={require('./resource/images/btn_jwxt.png')} style={styles.imageBtn} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
  showAlert() {
    Alert.alert('使用前须知', '使用此功能前需要您先手动连接到未认证的校园 WiFi 网络。',
      [
        { text: "返回", onPress: this.confirm },
        { text: "我已连接", onPress: () => Linking.openURL('http://10.8.0.253/') },
      ]
    );
  }
  Virus() {
    Alert.alert('免责申明', '此项服务由第三方 百度-疫情实时大数据报告 提供，默认显示国内疫情，“在鹿山”并不为其数据负责，具体疫情形势请关注官方讯息。',
      [
        { text: "返回", onPress: this.confirm },
        { text: "我已知晓", onPress: () => Linking.openURL('https://voice.baidu.com/act/newpneumonia/newpneumonia') },
      ]
    );
  }
}

//样式表
const styles = StyleSheet.create({
  titleBar: {
    flex: 2,
    backgroundColor: '#E9E9E9',
    height: 10,

  },
  titleText: {
    fontSize: 40,
    fontWeight: '600',
    marginLeft: 30,
    marginTop: 90
  },
  hitokoto: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  bodyContent: {
    flex: 5,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  group1: {
    marginTop: 30,
  },
  group1Text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30
  },
  imageBtnArea: {
    marginTop: 15,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  imageBtn: {
    marginLeft: 30,
    width: 135,
    height: 166,
  }
});