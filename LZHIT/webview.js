import React,{
    PropTypes} from 'react';
  import {
    requireNativeComponent,View} from 'react-native';
  
  //新版本必须加...View.propTypes
  var iface = {
      name: 'WebView',
      propTypes: {
          url: PropTypes.string,
          html: PropTypes.string,
          ...View.propTypes
      },
  }
  
  module.exports = requireNativeComponent('RCTWebView', iface,{
      nativeOnly:{
          "testID": true,
          'renderToHardwareTextureAndroid': true,
          'accessibilityComponentType': true,
          'accessibilityLabel': true,
          'importantForAccessibility': true,
          'accessibilityLiveRegion': true,
          'onLayout':true,
      }
  });