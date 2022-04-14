import React from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity, Text, ScrollView, Linking } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

const opensourceList = () => {
    return (
        <>
<ScrollView>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>OpenSource Project</Text>
            <Text style={styles.hitokoto}>All open source projects used by inLuShan App are listed here.</Text>
          </View>
          <View style={styles.bodyBackground}>
            <View style={styles.bodyContent}>
              <View style={styles.optionGroup}>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('https://github.com/react-native-clipboard/clipboard#readme')}>
                  <Text style={styles.optionText}>@react-native-community/clipboard</Text>
                  <Text style={styles.optionTextDescript}>React Native Clipboard API for macOS, iOS, Android, and Windows.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('https://github.com/Microsoft/appcenter-sdk-react-native/blob/master/appcenter-crashes/README.md')}>
                  <Text style={styles.optionText}>appcenter-crashes</Text>
                  <Text style={styles.optionTextDescript}>App Center is your continuous integration, delivery and learning solution for iOS and Android apps. Get faster release cycles, higher-quality apps, and the insights to build what users want.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('https://github.com/itinance/react-native-fs')}>
                  <Text style={styles.optionText}>react-native-fs</Text>
                  <Text style={styles.optionTextDescript}>Native filesystem access for react-native</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('https://github.com/facebook/react-native')}>
                  <Text style={styles.optionText}>react-native</Text>
                  <Text style={styles.optionTextDescript}>React Native brings React's declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('https://www.npmjs.com/package/@react-native-community/cli-platform-android')}>
                  <Text style={styles.optionText}>@react-native-community/cli-platform-android</Text>
                  <Text style={styles.optionTextDescript}>Command line tools that ship with react-native in form of the @react-native-community/cli package.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('https://github.com/finogeeks/react-native-mopsdk')}>
                  <Text style={styles.optionText}>react-native-mopsdk</Text>
                  <Text style={styles.optionTextDescript}>Lite service core.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('https://github.com/Microsoft/appcenter-sdk-react-native')}>
                  <Text style={styles.optionText}>appcenter-analytics</Text>
                  <Text style={styles.optionTextDescript}>App Center is your continuous integration, delivery and learning solution for iOS and Android apps. Get faster release cycles, higher-quality apps, and the insights to build what users want.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTextGroup} onPress={() => Linking.openURL('https://github.com/facebook/react')}>
                  <Text style={styles.optionText}>react</Text>
                  <Text style={styles.optionTextDescript}>React is a JavaScript library for creating user interfaces.</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ alignSelf: "center", marginBottom: 50, fontSize: 12, color: '#808080',fontWeight:'bold' }}>Write the code, change the world.</Text>
          </View>
        </ScrollView>
        </>
    );
};

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
    marginRight:30,
    fontWeight: '800'
  },
  optionTextDescript: {
    marginLeft: 30,
    marginRight:30,
  },
  optionTextGroup: {
    marginBottom: 30,
  },
});
export default opensourceList;