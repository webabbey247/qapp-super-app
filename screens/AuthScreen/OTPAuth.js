import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants';
import {CustomHeader} from '../../components/common';
import { OTPForm } from '../../components/Forms';

const OTPAuth = () => {  
  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.white}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.white}
          barStyle="dark-content"
        />
        <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
          <CustomHeader
            type="secondary"
            title="OTP Verification"
            subtitle="OTP has been sent to you on your mobile number. Please enter it
            below."
          />
          <OTPForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPAuth;
