import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, TouchableOpacity, Linking,ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Jwxt from './page/Jwxt'
import netWork from './page/Network'

class App extends Component {
  render() {
    return (
      <>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
        <ScrollView>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>在鹿山</Text>
          <Text style={styles.hitokoto}>当前为 Hummingbird 测试通道</Text>
        </View>
        <View style={styles.bodyBackground}>
          <View style={styles.bodyContent}>
            <View style={styles.group}>
              <Text style={styles.groupText}>
                教务相关
              </Text>
              <View style={styles.imageBtnArea}>
                <TouchableOpacity onPress={() => { Linking.openURL('http://xgxt.lzhit.edu.cn/xsfw/sys/emaphome/portal/index.do') }}>
                  <Image source={require('./resource/images/btn_glxt.png')} style={styles.imageBtn} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Jwxt')}>
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
                <TouchableOpacity onPress={this.Bbs.bind(this)}>
                  <Image source={require('./resource/images/bbs.png')} style={styles.imageMinBtnBbs} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Pedemic.bind(this)}>
                  <Image source={require('./resource/images/pedemic.png')} style={styles.imageMinBtnPedemic} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./resource/images/libCheck.png')} style={styles.imageMinBtnLibCheck} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.group}>
              <Text style={styles.groupText}>
                更多
              </Text>
              <View style={styles.imageBtnArea2}>
                <TouchableOpacity>
                  <Image source={require('./resource/images/share.png')} style={styles.imageMinBtnShare}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./resource/images/setting.png')} style={styles.imageMinBtnSetting}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./resource/images/sponsor.png')} style={styles.imageMinBtnSponsor}/>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{alignSelf:"center",marginTop:20,marginBottom:10,fontSize:12,color:'#E9E9E9'}}>App Ver.1.0.0(Alpha) </Text>
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
        { text: "我已知晓", onPress: () => Linking.openURL('https://voice.baidu.com/act/newpneumonia/newpneumonia') },
      ]
    );
  }
  Bbs() {
    Alert.alert('暂未开放', '树洞社区暂未开放，感谢关注。',
      [
        { text: "知道了", onPress: this.confirm }
      ]
    );
  }
}

//StackNavigator
export default StackNavigator({
  Home: {
    screen: App,
  },
  Jwxt: {
    screen: Jwxt,
  },
  netWork: {
    screen: netWork,
  },
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
    fontStyle: 'italic',
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