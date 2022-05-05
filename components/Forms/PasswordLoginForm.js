import React, {Fragment, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, icons, FONTS} from '../../constants';

import {
  styleGeneral,
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
} from '../../assets/css';

const PasswordLoginForm = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const commonSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, ({min}) => `Password must be atleast ${min} characters`)
      .required('kindly provide your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
  });
  

  const validationSchema = commonSchema;

  const userInfo = {
    phoneNumber: '',
    password: '',
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={userInfo}
      onSubmit={(values, formikActions) => {
        setTimeout(() => {
          console.log(values);
          formikActions.resetForm();
          navigation.navigate('MainScreen', {screen: 'Dashboard'});
        }, 1000);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <Fragment>
          <View style={styleFormComponents.formWrapper}>

            {/* Password */}
            <View style={{marginTop: SIZES.padding * 1.5}}>
              <View>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={styleFormComponents.defaultTextInput}
                  placeholder="Password"
                  placeholderTextColor={COLORS.textBlue}
                  selectionColor={COLORS.textBlue}
                  secureTextEntry={!showPassword}
                  returnKeyType="done"
                  maxLength={8}
                />

                <TouchableOpacity
                  style={styleFormComponents.defaultTextInputIconHolder}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Image
                    source={showPassword ? icons.disabled_eyes : icons.eyes}
                    style={styleFormComponents.defaultTextInputIcon}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password ? (
                <Text style={styleFormComponents.formErrorText}>
                  {errors.password}
                </Text>
              ) : null}
            </View>

            {/* Forget Password */}
            <TouchableOpacity
              style={styleGeneral.generalForgotPasswordWrapper}
              onPress={() => navigation.navigate('ResetPassword')}>
              <Text style={styleGeneral.generalForgotPasswordText}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styleAuthScreen.authButtonWrapper}>
            <TouchableOpacity
              style={styleButtons.defaultButton}
              onPress={handleSubmit}>
              <Text style={styleButtons.defaultButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </Fragment>
      )}
    </Formik>
  );
};

export default PasswordLoginForm;
