/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, StatusBar, Platform, Image} from 'react-native';
import {images, COLORS} from '../../constants';
import {styleSplashScreen} from '../../assets/css';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WalkThrough');
    }, 4000);
  });

  const renderSplashLogo = (
    <View style={styleSplashScreen.splashWrapper}>
      <View style={styleSplashScreen.splashWrapperImgHolder}>
        <Image
          source={images.qappLogo}
          resizeMode="contain"
          style={styleSplashScreen.splashImg}
        />
      </View>
    </View>
  );
  return (
    <LinearGradient
      colors={[COLORS.deepBlue, COLORS.progressProfile]}
      start={{x: 3, y: 1}}
      end={{x: 1, y: 3}}
      style={{
        flex: 1,
      }}>
      <SafeAreaView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor={Platform.OS === 'ios' ? null : COLORS.deepBlue}
        />
        <View style={styleSplashScreen.splashContainer}>
          {renderSplashLogo}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SplashScreen;
