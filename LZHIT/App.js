import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Button, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card } from 'react-native-shadow-cards';

const {width} = Dimensions.get('window')

const Apps = () => {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
        <LinearGradient
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00c6ff', '#0072ff']} style={styles.lgs} />
                <View style={styles.block}></View>
        <Text style={styles.titleText}>在鹿山</Text>
        <Image
        source={{uri:'https://skinit.top/info.png?v=Math.random()'}}
        style={{width:308, height:65,marginTop:30}} />
        <Card style={styles.comCard}>
          <Text style={styles.comCardText}>教务相关</Text>
        </Card>
        <Card style={styles.comCard}>
          <Text style={styles.comCardText}>校园生活</Text>
        </Card>
        <Text style={styles.footerText}>应用信息</Text>
      </View>
    );
};

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
    fontSize: 20
  },
  footerText:{
    marginTop:30,
    fontSize:12,
    color:'#C0C0C0',
  }
});

export default Apps;