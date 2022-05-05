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
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, icons} from '../../constants';
import {styleGeneral, styleAuthScreen, styleFooter} from '../../assets/css';
import {CustomHeader} from '../../components/common';
import {BankAccountForm} from '../../components/Forms';

const BankAccountLogin = ({navigation}) => {
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

  const renderFooter = (
    <TouchableWithoutFeedback
      style={styleAuthScreen.authFooterWrapper}
      onPress={() => navigation.navigate('Login')}>
      <Text style={styleFooter.footerText}>
        Don’t have internet banking?
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
          <StatusBar
            animated={true}
            backgroundColor={COLORS.deepBlue}
            barStyle="light-content"
          />
          {renderHeader}
          <ScrollView style={{flex: 1}}>
            <CustomHeader
              type="primary"
              title="Login to Bank Account"
              subtitle=" Sign in to continue."
            />
            <BankAccountForm />
            {renderFooter}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BankAccountLogin;
