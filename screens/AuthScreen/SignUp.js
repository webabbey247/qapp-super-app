/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
import {SignUpForm} from '../../components/Forms';
import {styleGeneral, styleAuthScreen, styleFooter} from '../../assets/css';
import LinearGradient from 'react-native-linear-gradient';
import {CustomHeader} from '../../components/common';

const SignUp = ({navigation}) => {
  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() => navigation.navigate('Login')}>
      <View style={styleGeneral.generalHeaderImgHolder}>
        <Image
          source={icons.chevronLeft}
          resizeMode="contain"
          style={styleGeneral.generalHeaderImg}
        />
      </View>
    </TouchableOpacity>
  );

  const renderFooter = (
    <TouchableWithoutFeedback
      style={styleAuthScreen.authFooterWrapper}
      onPress={() => navigation.navigate('Login')}>
      <Text style={styleFooter.footerText}>
        Already have an account?
        <Text style={styleFooter.footerSecondaryText}>{''} Sign In</Text>
      </Text>
    </TouchableWithoutFeedback>
  );

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.progressProfile]}
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
              title="Sign Up"
              subtitle="Please provide following details for your new account."
            />
            <SignUpForm />
            {renderFooter}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUp;
