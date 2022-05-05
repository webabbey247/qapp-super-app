/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, icons} from '../../constants';
import {styleGeneral} from '../../assets/css';
import LinearGradient from 'react-native-linear-gradient';

import {CustomHeader} from '../../components/common';
import { PasswordLoginForm } from '../../components/Forms';

const Login = ({navigation}) => {

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
              title="Enter Password"
              subtitle="Sign in to continue."
            />
            <PasswordLoginForm />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
