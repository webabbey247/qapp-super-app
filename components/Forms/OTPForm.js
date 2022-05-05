import React, {Fragment} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, FONTS} from '../../constants';
import {
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
  styleFooter,
} from '../../assets/css';

const OTPForm = ({typeUrl}) => {
  const navigation = useNavigation();

  const renderFooter = (
    <TouchableOpacity
      style={styleAuthScreen.authOTPFooterWrapper}
      onPress={() => navigation.navigate('Login')}>
      <Text style={styleFooter.authOTPFooterText}>
        Didn’t you receive the OTP?
        <Text style={styleFooter.footerSecondaryText}>{''} Resend OTP</Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <Fragment>
      <View style={styleFormComponents.inlineOTPContainer}>
        <View style={styleFormComponents.inlineOTPWrapper}>
          <TextInput
            style={styleFormComponents.inlineOTPTextInput}
            maxLength={1}
            returnKeyType="next"
            keyboardType="phone-pad"
            selectionColor={COLORS.textBlue}
          />

          <TextInput
            style={styleFormComponents.inlineOTPTextInput}
            maxLength={1}
            returnKeyType="next"
            keyboardType="phone-pad"
            selectionColor={COLORS.textBlue}
          />

          <TextInput
            style={styleFormComponents.inlineOTPTextInput}
            maxLength={1}
            returnKeyType="next"
            keyboardType="phone-pad"
            selectionColor={COLORS.textBlue}
          />

          <TextInput
            style={styleFormComponents.inlineOTPTextInput}
            maxLength={1}
            returnKeyType="next"
            keyboardType="phone-pad"
            selectionColor={COLORS.textBlue}
          />

          <TextInput
            style={styleFormComponents.inlineOTPTextInput}
            maxLength={1}
            returnKeyType="next"
            keyboardType="phone-pad"
            selectionColor={COLORS.textBlue}
          />

          <TextInput
            style={styleFormComponents.inlineOTPTextInput}
            maxLength={1}
            returnKeyType="next"
            keyboardType="phone-pad"
            selectionColor={COLORS.textBlue}
          />
        </View>
        {renderFooter}
      </View>
      <View style={styleAuthScreen.authOTPButtonWrapper}>
        {typeUrl === 'Login' && (
          <TouchableOpacity
            style={styleButtons.secondaryButton}
            onPress={() =>
              navigation.navigate('QappUserScreen', {
                screen: 'ConsumerDashboard',
              })
            }>
            <Text style={styleButtons.secondaryButtonText}>Confirm OTP</Text>
          </TouchableOpacity>
        )}

        {typeUrl === 'ResetPassword' && (
          <TouchableOpacity
            style={styleButtons.secondaryButton}
            onPress={() => navigation.navigate('NewPassword')}>
            <Text style={styleButtons.secondaryButtonText}>Verify OTP</Text>
          </TouchableOpacity>
        )}

        {typeUrl === 'BankLogin' && (
          <TouchableOpacity
            style={styleButtons.secondaryButton}
            onPress={() =>
              navigation.navigate('BankFIScreen', {
                screen: 'BankDashboard',
              })
            }>
            <Text style={styleButtons.secondaryButtonText}>Verify OTP</Text>
          </TouchableOpacity>
        )}
      </View>
    </Fragment>
  );
};

export default OTPForm;
