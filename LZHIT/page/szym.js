import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Qx from './qx';
import opensourceList from './opensourceList';
import Syxy from './Syxy';
import updateCheck from './updateCheck';
import Ysxy from './Ysxy';
import Pgyer from 'react-native-pgyer-bridge';

class szym extends Component {
  render() {
    return (
      <>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
        <ScrollView>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>设置</Text>
            <Text style={styles.hitokoto}>这里也许有你想了解的</Text>
          </View>
          <View style={styles.bodyBackground}>
            <View style={styles.bodyContent}>
              <View style={styles.optionGroup}>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=LyS9u&appChannel=share&businessType=9&from=246610&biz=ka')}>
                  <Text style={styles.optionText}>加入QQ频道</Text>
                  <Text style={styles.optionTextDescript}>加入 在鹿山App 的官方QQ频道，一起讨论~</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => this.props.navigation.navigate('Syxy')}>
                  <Text style={styles.optionText}>使用协议</Text>
                  <Text style={styles.optionTextDescript}>使用前必看</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => this.props.navigation.navigate('Ysxy')}>
                  <Text style={styles.optionText}>隐私申明</Text>
                  <Text style={styles.optionTextDescript}>该应用不会收集你的任何信息哦，请放心使用。</Text>
                  <Text style={styles.optionTextDescript}>(*/ω＼*)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => this.props.navigation.navigate('updateCheck')}>
                  <Text style={styles.optionText}>检查更新</Text>
                  <Text style={styles.optionTextDescript}>将联网进行更新检查</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => this.props.navigation.navigate('Qx')}>
                  <Text style={styles.optionText}>权限</Text>
                  <Text style={styles.optionTextDescript}>点击了解此应用需要什么权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => this.props.navigation.navigate('opensourceList')}>
                  <Text style={styles.optionText}>关于开源</Text>
                  <Text style={styles.optionTextDescript}>列出在鹿山App使用到的开源项目</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => {Pgyer.showFeedbackView({"自定义参数": "我是自定义参数"})}}>
                  <Text style={styles.optionText}>关于作者</Text>
                  <Text style={styles.optionTextDescript}>©木辛恒同学</Text>
                  <Text style={styles.optionTextDescript}>邮箱：tzh894895@gmail.com</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup}>
                  <Text style={styles.optionText}>特别鸣谢</Text>
                  <Text style={styles.optionTextDescript}>感谢以下同学的帮助，让此应用能够更加完善：</Text>
                  <Text style={styles.optionTextDescript}>@憨憨的熊、@汐乱情秋君、@熠櫆、@刘处长、@Rominwolf、@小白</Text>
                  <Text style={styles.optionTextDescript}>（排名不分先后）</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ alignSelf: "center", marginBottom: 50, fontSize: 12, color: '#808080',fontWeight:'bold' }}>- 感谢正在使用的你 -</Text>
          </View>
        </ScrollView>
      </>
    );
  }
}

//StackNavigator
export default StackNavigator({
  Home: {
    screen: szym,
  },
  Syxy: {
    screen: Syxy,
  },
  Ysxy: {
    screen: Ysxy,
  },
  Qx: {
    screen: Qx,
  },
  opensourceList: {
    screen: opensourceList,
  },
  updateCheck: {
    screen: updateCheck,
  },
},{
  headerMode:'None' //隐藏导航栏
});

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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom:30
  },
  optionGroup: {
    marginTop: 30,
  },
  optionText: {
    fontSize: 20,
    marginLeft: 30,
    fontWeight: '800'
  },
  optionTextDescript: {
    marginLeft: 30,
  },
  optionTextGroup: {
    marginBottom: 30,
  },
})