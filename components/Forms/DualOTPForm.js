import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES} from '../../constants';
import {
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
} from '../../assets/css';

const DualOTPForm = ({typeUrl}) => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <View style={styleFormComponents.formWrapper}>
        {/* Mobile Number */}
        <View style={{marginTop: SIZES.padding * 1.5}}>
          <Text style={styleFormComponents.formLabel}>
            Phone verification code
          </Text>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder=""
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />
          <Text style={styleFormComponents.formBottomLabel}>
            Enter the 6 digit code sent to +23470*****8989
          </Text>
        </View>

        {/* Email Address */}
        <View style={{marginTop: SIZES.padding * 1.5}}>
          <Text style={styleFormComponents.formLabel}>
            Email verification code
          </Text>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder=""
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />
          <Text style={styleFormComponents.formBottomLabel}>
            Enter the 6 digit code sent to el****ti@gmail.com
          </Text>
        </View>
      </View>
      <View
        style={[
          styleAuthScreen.authButtonWrapper,
          {marginVertical: SIZES.padding * 3},
        ]}>
        {typeUrl === 'Register' && (
          <TouchableOpacity
            style={styleButtons.defaultButton}
            onPress={() =>
              navigation.navigate('QappUserScreen', {
                screen: 'ConsumerDashboard',
              })
            }>
            <Text style={styleButtons.defaultButtonText}>Submit</Text>
          </TouchableOpacity>
        )}

        {typeUrl === 'Replace' && (
          <TouchableOpacity
            style={styleButtons.defaultButton}
            onPress={() =>
              navigation.navigate('BankFIScreen', {
                screen: 'BankDashboard',
              })
            }>
            <Text style={styleButtons.defaultButtonText}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </Fragment>
  );
};

export default DualOTPForm;
