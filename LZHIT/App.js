import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Button, Image, AppRegistry, Alert, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card } from 'react-native-shadow-cards';

export default class App extends Component {
  render() {
    const {navigation}=this.props;
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
        <LinearGradient
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00c6ff', '#0072ff']} style={styles.lgs} />
                <View style={styles.block}></View>
        <Text style={styles.titleText}>在鹿山</Text>
        
        <TouchableOpacity>
        <Image
        source={{uri:'https://skinit.top/info.png?v=Math.random()'}}
        style={{width:308, height:65,marginTop:30}} />
        </TouchableOpacity>
        <Card style={styles.comCard}>
          <Text style={styles.comCardText}>教务相关</Text>
           <View style={styles.comCardView}>
            <TouchableOpacity onPress={()=>{navigation.navigate(Jwxt)}}>
             <View style={styles.funcView}>
               <Image source={require('./resource/images/jwxt.png')} style={styles.funcIcon}/>
               <Text style={styles.funcIconDesc}>教务系统</Text>
             </View>
          </TouchableOpacity>
          <TouchableOpacity>
             <View style={styles.funcView}>
               <Image source={require('./resource/images/workstation.png')} style={styles.funcIcon}/>
               <Text style={styles.funcIconDesc}>学生工作平台</Text>
             </View>
          </TouchableOpacity>
          <TouchableOpacity>
             <View style={styles.funcView}>
               <Image source={require('./resource/images/infomation.png')} style={styles.funcIcon}/>
               <Text style={styles.funcIconDesc}>内网信息门户</Text>
             </View>
          </TouchableOpacity>
          </View>
        </Card>
        <Card style={styles.comCard}>
          <Text style={styles.comCardText}>校园生活</Text>
          <View style={styles.comCardView}>
          <TouchableOpacity onPress={this.showAlert.bind(this)}>
          <View style={styles.funcView}>
          <Image source={require('./resource/images/connect.png')}  style={styles.funcIcon}/>
          <Text style={styles.funcIconDesc}>校园网认证</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Virus.bind(this)}>
             <View style={styles.funcView}>
               <Image source={require('./resource/images/num.png')} style={styles.funcIcon}/>
               <Text style={styles.funcIconDesc}>新冠疫情数据</Text>
             </View>
          </TouchableOpacity>
          </View>
        </Card>
        <Text style={styles.footerText}>应用信息</Text>
      </View>
    );
  }
  showAlert() {
    Alert.alert('使用前须知','使用此功能前需要您先手动连接到未认证的校园 WiFi 网络。',
    [
    {text:"返回", onPress:this.confirm},
    {text:"我已连接", onPress:this.confirm},
  ]
    );
  }
  Virus() {
    Alert.alert('免责申明','此项服务由第三方 百度-疫情实时大数据报告 提供，默认显示国内疫情，“在鹿山”并不为其数据负责，具体疫情形势请关注官方讯息。',
    [
    {text:"返回", onPress:this.confirm},
    {text:"我已知晓", onPress:this.confirm},
  ]
    );
  }
}

//样式表
const styles = StyleSheet.create({
  lgs: {
    width: 1080,
    height: 85,
    alignSelf:'flex-start',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#F5F5F5',
  },
  block: {
    height: 30,
  },
  titleText: {
    marginTop:-65,
    color: 'white',
    fontSize: 20,
  },
  comCard: {
    marginTop:20,
  },
  comCardText: {
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
    fontSize: 13,
    color:'#696969',
    fontWeight: 'bold'
  },
  footerText:{
    marginTop:30,
    fontSize:12,
    color:'#C0C0C0',
  },
  funcIcon:{
    width:50,
    height:50,
  },
  funcIconDesc:{
    justifyContent:'center'
  },
  funcView:{
    marginTop:5,
    marginLeft:30,
    marginBottom:20,
    alignItems: 'center',
    justifyContent:'center'
  },
  comCardView:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: 'center',
  }
});