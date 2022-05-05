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
import LinearGradient from 'react-native-linear-gradient';
import {FONTS, COLORS, SIZES, icons} from '../../constants';
import {CustomHeader} from '../../components/common';
import {styleGeneral, styleAuthScreen, styleFooter} from '../../assets/css';
import {NewPasswordForm} from '../../components/Forms';

const NewPassword = ({navigation}) => {
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
            barStyle="light-content"
            backgroundColor={Platform.OS === 'ios' ? null : COLORS.deepBlue}
          />
          {renderHeader}
          <ScrollView style={{flex: 1}}>
            <CustomHeader
              type="primary"
              title="New Password"
              subtitle="Set the password for your account so you can login and access all the
            features."
            />
            <NewPasswordForm />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default NewPassword;
