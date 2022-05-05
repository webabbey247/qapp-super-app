import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, icons} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {styleGeneral} from '../../assets/css';

import {CustomHeader} from '../../components/common';
import {DualOTPForm} from '../../components/Forms';

const OTPSignUp = ({navigation, route}) => {
  const {typeUrl} = route.params;

  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() => navigation.navigate('SignUp')}>
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
              title="OTP Verification"
              subtitle="Enter the 6 digits code you received on your email or phone number."
            />
            <DualOTPForm typeUrl={typeUrl} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OTPSignUp;
