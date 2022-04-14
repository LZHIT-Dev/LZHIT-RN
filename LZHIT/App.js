import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, TouchableOpacity, Linking, ScrollView, Share } from 'react-native';
import { StackNavigator } from 'react-navigation'
import netWork from './page/Network'
import libCheck from './page/libCheck';
import szym from './page/szym'
import thePedemic from './page/pedemic';
import topInfoJump from './page/topinfojump';
import afdian from './page/afdian';
import WebView from "react-native-webview";
import MopSDK from 'react-native-mopsdk';
import Pgyer from 'react-native-pgyer-bridge';

//小程序容器打开
const onPressOpenJwxtApplet = () => {
  MopSDK.openApplet('61faa3e88bc99400018e2093', '', '', data => {});
};
const onPressOpenXgptApplet = () => {
  MopSDK.openApplet('61faa8868bc99400018e2094', '', '', data => {});
};
const onPressOpenLibcheckApplet = () => {
  MopSDK.openApplet('61fbbf588bc99400018e20a1', '', '', data => {});
};
const onPressOpenSchoolmapApplet = () => {
  MopSDK.openApplet('61fbc9ec8bc99400018e20a5', '', '', data => {});
};
const onPressOpenBbsApplet = () => {
  MopSDK.openApplet('61fbca1c8bc99400018e20a7', '', '', data => {});
};
//微服务广场
const onPressOpenLiteServeApplet = () => {
  MopSDK.openApplet('6242ff4578c1a7000142b24f', '', '', data => {});
};

//分享组件
const userShare = async () => {
  Share.share({
    message:'我在使用【在鹿山】App，每位柳工院学子都值得拥有的校园生活App！下载地址：https://inlushan.top/',
    title:'【在鹿山】App', //Android
    Content:'我在使用【在鹿山】App，每位柳工院学子都值得拥有的校园生活App！下载地址：https://inlushan.top/', //Android/iOS
    url:'https://inlushan.top/' //iOS
  },{
    dialogTitle:'向好友分享【在鹿山】App'
  })
}

class App extends Component {
  componentDidMount() {
    Pgyer.initWithConfig({
      // themeColor: '#ffff00',
      colorPickerBackgroundColor: '#ff0000',
      colorTitleBg: '#ff0000',
      appId: Platform.select({
        android: 'ca4f383ea4e397a79934c458f758f396'
      })
    })
    MopSDK.initialize(
      {
        appkey: 'rel7xAYijZYWFY/TUj0CgPzgIHI/lBDkWFvNgcDWCzo=',
        secret: '4e7d6a94ec7c2ded',
        apiServer: 'https://api.finclip.com',
        apiPrefix: '/api/v1/mop',
      },
      data => {
        console.log('message;', data);
        const s = JSON.stringify(data);
        this.setState({
          status: 'native callback received',
          message: s,
        });
      },
    );
    Pgyer.getUpdateInfo().then(res => {
      console.log('结果', res);
      // ios端可以直接打开安装
      // Linking.openURL(res.downloadURL)
    });
  }

  render() {
    return (
      <>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
        <ScrollView overScrollMode={"never"} bounces={false}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>在鹿山</Text>
          <Text style={styles.hitokoto}>同学，你好！</Text>
        </View>
        <View style={styles.bodyBackground}>
          <View style={styles.bodyContent}>
            <View style={styles.group}>
              <Text style={styles.groupText}>
                置顶信息
              </Text>
              <View style={styles.topImageBtnArea}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('topInfoJump')}>
                  <WebView source={{uri:'file:///android_asset/jump.html'}} sharedCookiesEnabled={true} startInLoadingState={true} style={{height:75, marginLeft:30,}} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.group}>
              <Text style={styles.groupText}>
                教务相关
              </Text>
              <View style={styles.imageBtnArea}>
                <TouchableOpacity onPress={onPressOpenXgptApplet}>
                  <Image source={require('./resource/images/btn_glxt.png')} style={styles.imageBtn} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressOpenJwxtApplet}>
                  <Image source={require('./resource/images/btn_jwxt.png')} style={styles.imageBtn} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.group}>
              <Text style={styles.groupText}>
                校园生活
              </Text>
              <View style={styles.imageBtnArea2}>
                <TouchableOpacity onPress={this.Network.bind(this)}>
                  <Image source={require('./resource/images/network.png')} style={styles.imageMinBtnNetwork} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressOpenBbsApplet}>
                  <Image source={require('./resource/images/bbs.png')} style={styles.imageMinBtnBbs} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Pedemic.bind(this)}>
                  <Image source={require('./resource/images/pedemic.png')} style={styles.imageMinBtnPedemic} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressOpenLibcheckApplet}>
                  <Image source={require('./resource/images/libCheck.png')} style={styles.imageMinBtnLibCheck} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressOpenSchoolmapApplet}>
                  <Image source={require('./resource/images/schoolMap.png')} style={styles.imageMinBtnSchoolMap} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.group}>
              <Text style={styles.groupText}>
                 微服务广场
              </Text>
              <TouchableOpacity onPress={onPressOpenLiteServeApplet}>
              <WebView source={{uri:'file:///android_asset/liteServerPlazaLoad.html'}} sharedCookiesEnabled={true} startInLoadingState={true} style={{height:212, marginLeft:30,}} />
              </TouchableOpacity>
            </View>
            <View style={styles.group}>
              <Text style={styles.groupText}>
                更多
              </Text>
              <View style={styles.imageBtnArea2}>
                <TouchableOpacity onPress={() => userShare()}>
                  <Image source={require('./resource/images/share.png')} style={styles.imageMinBtnShare}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('szym')}>
                  <Image source={require('./resource/images/setting.png')} style={styles.imageMinBtnSetting}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('afdian')}>
                  <Image source={require('./resource/images/sponsor.png')} style={styles.imageMinBtnSponsor}/>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{alignSelf:"center",marginTop:30,marginBottom:20,fontSize:12,color:'#E9E9E9'}}>App Ver2.3(Release) </Text>
          </View>
        </View>
        </ScrollView>
      </>
    );
  }
  Network() {
    Alert.alert('使用前须知', '使用此功能前需要您先手动连接到未认证的校园 WiFi 网络。',
      [
        { text: "返回", onPress: this.confirm },
        { text: "我已连接", onPress:() => this.props.navigation.navigate('netWork') },
      ]
    );
  }
  Pedemic() {
    Alert.alert('免责申明', '此项服务由第三方 百度-疫情实时大数据报告 提供，默认显示国内疫情，“在鹿山”并不为其数据负责，具体疫情形势请关注官方讯息。',
      [
        { text: "返回", onPress: this.confirm },
        { text: "我已知晓", onPress: () => this.props.navigation.navigate('thePedemic')},
      ]
    );
  }
}

//StackNavigator
export default StackNavigator({
  Home: {
    screen: App,
  },
  netWork: {
    screen: netWork,
  },
  libCheck: {
    screen: libCheck,
  },
  szym: {
    screen: szym,
  },
  thePedemic: {
    screen: thePedemic,
  },
  topInfoJump: {
    screen: topInfoJump,
  },
  afdian: {
    screen: afdian,
  }
},{
  headerMode:'None' //隐藏导航栏
});

//样式表
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
  bodyBackground: {
    flex: 5,
    backgroundColor: '#E9E9E9',
  },
  bodyContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  group: {
    marginTop: 30,
  },
  groupText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30
  },
  imageBtnArea: {
    marginTop: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  imageBtnArea2: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom:10
  },
  topImageBtnArea: {
    marginTop: 15,
  },
  topImageBtn: {
    width: 300,
    height: 63,
    marginLeft:30,
  },
  imageBtn: {
    marginLeft: 30,
    width: 135,
    height: 166,
  },
  imageMinBtnNetwork: {
    marginLeft: 30,
    marginTop: 10,
    height: 65.95,
    width: 163
  },
  imageMinBtnBbs: {
    marginLeft: 30,
    marginTop: 10,
    height: 68,
    width: 143
  },
  imageMinBtnPedemic: {
    marginTop: 10,
    marginLeft: 30,
    height: 68,
    width: 178
  },
  imageMinBtnLibCheck:{
    marginTop: 10,
    marginLeft: 30,
    height: 68,
    width: 196
  },
  imageMinBtnSchoolMap: {
    marginTop: 10,
    marginLeft: 30,
    width: 143,
    height: 68
  },
  imageMinBtnShare: {
    width: 160,
    height: 65.54,
    marginTop: 10,
    marginLeft: 30,
  },
  imageMinBtnSetting: {
    width: 106,
    height: 67.27,
    marginTop: 10,
    marginLeft: 30,
  },
  imageMinBtnSponsor: {
    width: 142,
    height: 66.94,
    marginTop: 10,
    marginLeft: 30,
  }
});
