import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { StackNavigator, createStackNavigator  } from 'react-navigation'
import szym from './szym';

class privacy extends React.Component {
  render() {
    return (
      <>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
        <ScrollView>
          <View style={styles.titleBar}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('szym')}>
              <Image source={require('../resource/images/backBtn.png')} style={{ width: 30, height: 25, marginTop: 110, marginLeft: 20 }} />
            </TouchableOpacity>
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
                  <Text style={styles.optionTextDescript}>软件不会收集你的任何信息哦，请放心使用。</Text>
                  <Text style={styles.optionTextDescript}>(*/ω＼*)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup}>
                  <Text style={styles.optionText}>检查更新</Text>
                  <Text style={styles.optionTextDescript}>将前往 酷安 进行检查更新</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup}>
                  <Text style={styles.optionText}>权限</Text>
                  <Text style={styles.optionTextDescript}>点击了解这个软件需要什么权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup}>
                  <Text style={styles.optionText}>版本信息</Text>
                  <Text style={styles.optionTextDescript}>AppVer.1.0.0</Text>
                  <Text style={styles.optionTextDescript}>Channel Stable</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ alignSelf: "center", marginTop: 20, marginBottom: 10, fontSize: 12, color: '#E9E9E9' }}>App Ver.1.0.0(Alpha) </Text>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

//StackNavigator
export default StackNavigator({
  szym: {
    screen: szym,
  },
  privacy: {
    screen: privacy,
  },
}, {
  headerMode: 'None' //隐藏导航栏
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
    marginTop: 30
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