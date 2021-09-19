import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, TouchableOpacity, Linking, ScrollView } from 'react-native';

const szym = () => {
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
                <TouchableOpacity style={styles.optionTextGroup}>
                  <Text style={styles.optionText}>使用协议</Text>
                  <Text style={styles.optionTextDescript}>使用前必看</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup}>
                  <Text style={styles.optionText}>隐私申明</Text>
                  <Text style={styles.optionTextDescript}>该应用不会收集你的任何信息哦，请放心使用。</Text>
                  <Text style={styles.optionTextDescript}>(*/ω＼*)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('https://www.coolapk.com/apk/dev.deepocean.lzhit')}>
                  <Text style={styles.optionText}>检查更新</Text>
                  <Text style={styles.optionTextDescript}>将前往 <Text style={{color:'#0f9d58'}}>酷安</Text> 进行检查更新</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup}>
                  <Text style={styles.optionText}>权限</Text>
                  <Text style={styles.optionTextDescript}>点击了解此应用需要什么权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('mailto:tzh894895@gmail.com')}>
                  <Text style={styles.optionText}>关于作者</Text>
                  <Text style={styles.optionTextDescript}>©木辛恒同学</Text>
                  <Text style={styles.optionTextDescript}>邮箱：tzh894895@gmail.com</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup}>
                  <Text style={styles.optionText}>特别鸣谢</Text>
                  <Text style={styles.optionTextDescript}>感谢以下同学的帮助，让此应用能够更加完善：</Text>
                  <Text style={styles.optionTextDescript}>@憨憨的熊、@汐乱情秋君、@熠櫆、@刘处长、@Rominwolf</Text>
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
export default szym;