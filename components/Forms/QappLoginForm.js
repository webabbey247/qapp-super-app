import React, {Fragment, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
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

const QappLoginForm = ({toggleOption}) => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [areaCode, setAreaCode] = useState([]);
  const [selectedAreaCode, setSelectedAreaCode] = useState('');
  const [modalVisbile, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(response => response.json())
      .then(data => {
        const areaCodeData = data.map(item => {
          return {
            code: item.cca2,
            name: item.name.common,
            flag: item.flags[1],
            dialCode: [item.idd.root, (item.idd.suffixes || [])[0]].join(''),
          };
        });

        setAreaCode(areaCodeData);
        if (areaCodeData.length > 0) {
          let defaultAreaData = areaCodeData.filter(a => a.code === 'NG');
          if (defaultAreaData.length > 0) {
            setSelectedAreaCode(defaultAreaData[0]);
            // console.log(selectedAreaCode);
          }
        }
      })
      .catch(err => {
        console.error('Request failed', err);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{padding: SIZES.padding, flexDirection: 'row'}}
        onPress={() => {
          setSelectedAreaCode(item);
          setModalVisible(false);
        }}>
        <Image
          source={{uri: item.flag}}
          style={{
            width: 30,
            height: 30,
            marginRight: 10,
          }}
        />
        <Text style={{...FONTS.body4, color: COLORS.white}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderAreaCodeModal = (
    <Modal animationType="slide" transparent={true} visible={modalVisbile}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styleGeneral.generalModalContainer}>
          <View style={styleGeneral.generalModal}>
            <FlatList
              data={areaCode}
              renderItem={renderItem}
              keyExtractor={item => item.code}
              showsVerticalScrollIndicator={false}
              style={styleGeneral.generalFlatlistModal}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  const commonSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, ({min}) => `Password must be atleast ${min} characters`)
      .required('kindly provide your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
  });
  const phoneSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required('Kindly provide your registered phone number')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Kindly provide a valid Phone number',
      )
      .min(11, 'Phone number must be atleast the 11 characters long ')
      .max(11, 'Phone number must be atleast the 11 characters long'),
  });
  const emailSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email('Kindly provide a valid email address')
      .required('Kindly provide your registered email address'),
  });

  const validationSchema = toggleOption
    ? commonSchema.concat(phoneSchema)
    : commonSchema.concat(emailSchema);

  const userInfo = {
    phoneNumber: '',
    emailAddress: '',
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
          navigation.navigate('OTPAuth', {typeUrl: 'Login'});
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
            {toggleOption ? (
              <Fragment>
                {/* Mobile Number */}
                <View
                  style={
                    toggleOption
                      ? {marginTop: SIZES.padding * 1}
                      : {display: 'none'}
                  }>
                  <View style={styleFormComponents.phoneCodeContainer}>
                    {/* Country Code */}
                    <TouchableOpacity
                      style={styleFormComponents.phoneCodeWrapper}
                      onPress={() => setModalVisible(true)}>
                      <View style={styleFormComponents.phoneCodeImgHolder}>
                        <Image
                          source={{uri: selectedAreaCode.flag}}
                          resizeMode="contain"
                          style={styleFormComponents.phoneCodeImg}
                        />
                      </View>
                      <View style={styleFormComponents.phoneCodeTextHolder}>
                        <Text style={styleFormComponents.phoneCodeText}>
                          {selectedAreaCode?.dialCode}
                        </Text>
                      </View>
                      <View
                        style={styleFormComponents.phoneCodeDropDownImgHolder}>
                        <Image
                          source={icons.DropDown}
                          style={styleFormComponents.phoneCodeDropDownImg}
                        />
                      </View>
                    </TouchableOpacity>
                    <TextInput
                      onChangeText={handleChange('phoneNumber')}
                      onBlur={handleBlur('phoneNumber')}
                      value={values.phoneNumber}
                      style={styleFormComponents.phoneCodeTextInput}
                      placeholder="Phone Number"
                      placeholderTextColor={COLORS.textBlue}
                      selectionColor={COLORS.textBlue}
                      returnKeyType="next"
                      keyboardType="phone-pad"
                      maxLength={11}
                    />
                  </View>
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <Text style={styleFormComponents.formErrorText}>
                      {errors.phoneNumber}
                    </Text>
                  ) : null}
                </View>
              </Fragment>
            ) : (
              <Fragment>
                {/* Email Address */}
                <View
                  style={
                    toggleOption
                      ? {display: 'none'}
                      : {marginTop: SIZES.padding * 1}
                  }>
                  <TextInput
                    onChangeText={handleChange('emailAddress')}
                    onBlur={handleBlur('emailAddress')}
                    value={values.emailAddress}
                    style={styleFormComponents.defaultTextInput}
                    placeholder="Email Address"
                    placeholderTextColor={COLORS.textBlue}
                    selectionColor={COLORS.textBlue}
                    keyboardType="email-address"
                  />
                  {errors.emailAddress && touched.emailAddress ? (
                    <Text style={styleFormComponents.formErrorText}>
                      {errors.emailAddress}
                    </Text>
                  ) : null}
                </View>
              </Fragment>
            )}

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
              onPress={handleSubmit}
              // onPress={() =>
              //   navigation.navigate('OTPAuth', {typeUrl: 'Login'})
              // }
            >
              <Text style={styleButtons.defaultButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          {renderAreaCodeModal}
        </Fragment>
      )}
    </Formik>
  );
};

export default QappLoginForm;
