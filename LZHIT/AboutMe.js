import React, { Component } from 'react';
import {
    Button
} from 'react-native'
import { NavigationActions } from 'react-navigation'

class ViewTow extends Component {
    // 这些注释全部是navigationOptions的属性 navigationOptions是标题栏
    // title：标题，如果设置了这个导航栏和标签栏的title就会变成一样的，所以不推荐使用这个方法。
    // header：可以设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了。
    // headerTitle：设置导航栏标题，推荐用这个方法。
    // headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
    // headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。（上个页面的标题过长，导致显示不下，所以改成了短一些的。）
    // headerRight：设置导航条右侧。可以是按钮或者其他。
    // headerLeft：设置导航条左侧。可以是按钮或者其他。
    // headerStyle：设置导航条的样式。背景色，宽高等。如果想去掉安卓导航条底部阴影可以添加elevation: 0，iOS下用shadowOpacity: 0。
    // headerTitleStyle：设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
    // headerBackTitleStyle：设置导航条返回文字样式。
    // headerTintColor：设置导航栏文字颜色。总感觉和上面重叠了。
    // headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0
    // gesturesEnabled：是否支持滑动返回手势，iOS默认支持，安卓默认关闭

    static navigationOptions = {
        headerTitle: 'ViewTow'
    }

    render() {
        return (

            <Button

                onPress={() => {
                    this.props.navigation.navigate('Three')
                }}

                title='点击进入ViewThree'
            />

        )
    }

}

export default ViewTow;