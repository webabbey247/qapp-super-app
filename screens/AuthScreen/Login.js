/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, icons} from '../../constants';
import {styleGeneral, styleAuthScreen, styleFooter} from '../../assets/css';
import {QappLoginForm} from '../../components/Forms';
import LinearGradient from 'react-native-linear-gradient';

import {CustomHeader} from '../../components/common';

const Login = ({navigation}) => {
  const [togglePhoneOption, setTogglePhoneOption] = useState(true);

  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() =>
        navigation.navigate('LaunchScreen', {
          screen: 'WalkThrough',
        })
      }>
      <View style={styleGeneral.generalHeaderImgHolder}>
        <Image
          source={icons.chevronLeft}
          resizeMode="contain"
          style={styleGeneral.generalHeaderImg}
        />
      </View>
    </TouchableOpacity>
  );

  const renderLoginOption = (
    <View style={styleAuthScreen.loginOptionContainer}>
      <View style={styleAuthScreen.loginOptionsWrapper}>
        <TouchableOpacity
          style={[
            styleAuthScreen.loginOptionsTab,
            togglePhoneOption
              ? styleAuthScreen.loginOptionsActiveTab
              : styleAuthScreen.loginOptionsInActiveTab,
          ]}
          onPress={() => {
            setTogglePhoneOption(true);
          }}>
          <Text style={styleAuthScreen.loginOptionsTabText}>Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styleAuthScreen.loginOptionsTab,
            togglePhoneOption
              ? styleAuthScreen.loginOptionsInActiveTab
              : styleAuthScreen.loginOptionsActiveTab,
          ]}
          onPress={() => {
            setTogglePhoneOption(false);
          }}>
          <Text style={styleAuthScreen.loginOptionsTabText}>Email Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderFooter = (
    <TouchableWithoutFeedback
      style={styleAuthScreen.authFooterWrapper}
      onPress={() => navigation.navigate('SignUp')}>
      <Text style={styleFooter.footerText}>
        Don’t have an account?
        <Text style={styleFooter.footerSecondaryText}>{''} Sign Up</Text>
      </Text>
    </TouchableWithoutFeedback>
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
        <KeyboardAvoidingView style={{flex: 1}}>
          <StatusBar animated={true} barStyle="light-content" />
          {renderHeader}
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <CustomHeader
              type="primary"
              title="Login to QAPP"
              subtitle="Sign in to continue."
            />
            {renderLoginOption}
            <QappLoginForm toggleOption={togglePhoneOption} />
            {renderFooter}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
