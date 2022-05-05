/* eslint-disable react-native/no-inline-styles */
import React, {useState, Fragment} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons} from '../../constants';
import CheckBox from '@react-native-community/checkbox';

const OnboardBankAccount = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [pin, setPin] = useState(false);
  const [confirmPin, setConfirmPin] = useState(false);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleTerms, setToggleTerms] = useState(false);

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding * 1,
          paddingVertical: SIZES.padding * 0.5,
          backgroundColor: COLORS.primary,
        }}
        onPress={() => navigation.navigate('BankAccountLogin')}>
        <View
          style={{
            backgroundColor: COLORS.darkCyan,
            borderRadius: 20,
            width: 40,
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: COLORS.black,
            borderWidth: 1,
            borderStyle: 'solid',
          }}>
          <Image
            source={icons.chevronLeft}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }

  function renderHeaderCaption() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 3,
        }}>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.h2,
          }}>
          Complete Registration
        </Text>
        <Text
          style={{
            marginTop: SIZES.padding,
            color: COLORS.gray,
            ...FONTS.body4,
          }}>
          Please fill in your bank details
        </Text>
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          paddingHorizontal: SIZES.padding * 3,
        }}>
        {/* Select Bank */}
        <View style={{marginTop: SIZES.padding * 1}}>
          <TextInput
            style={{
              backgroundColor: COLORS.darkCyan,
              paddingHorizontal: SIZES.padding * 2,
              height: 50,
              color: COLORS.gray,
              borderRadius: 10,
              ...FONTS.body4,
            }}
            placeholder="Select Bank"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 5,
              bottom: 0,
              width: 30,
              height: 30,
            }}
            onPress={() => console.log('Select Bank')}>
            <Image
              source={icons.chevronCircleDown}
              style={{
                width: 20,
                height: 13,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Account Number */}
        <View style={{marginTop: SIZES.padding * 1}}>
          <TextInput
            style={{
              backgroundColor: COLORS.darkCyan,
              paddingHorizontal: SIZES.padding * 2,
              height: 50,
              color: COLORS.gray,
              borderRadius: 10,
              ...FONTS.body4,
            }}
            placeholder="Account Number"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />
        </View>
        {/* Password */}
        <View style={{marginTop: SIZES.padding * 1}}>
          <TextInput
            style={{
              backgroundColor: COLORS.darkCyan,
              paddingHorizontal: SIZES.padding * 2,
              height: 50,
              color: COLORS.gray,
              borderRadius: 10,
              ...FONTS.body4,
            }}
            placeholder="Password"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 5,
              bottom: 0,
              width: 30,
              height: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.disabled_eyes : icons.eyes}
              style={{
                width: 20,
                height: 13,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* I don’t have internet banking */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: SIZES.padding * 1,
          }}>
          <View style={{marginTop: SIZES.padding * 1}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <View style={{marginTop: SIZES.padding * 1.5}}>
            <Text
              style={{
                color: COLORS.gray,
                marginLeft: 5,
                ...FONTS.body4,
              }}>
              I don’t have internet banking
            </Text>
          </View>
        </View>

        {toggleCheckBox ? (
          <Fragment>
            {/* Confirm Password */}
            <View style={{marginTop: SIZES.padding * 1}}>
              <TextInput
                style={{
                  backgroundColor: COLORS.darkCyan,
                  paddingHorizontal: SIZES.padding * 2,
                  height: 50,
                  color: COLORS.gray,
                  borderRadius: 10,
                  ...FONTS.body4,
                }}
                placeholder="Confirm Password"
                placeholderTextColor={COLORS.textBlue}
                selectionColor={COLORS.textBlue}
                secureTextEntry={!confirmPassword}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 5,
                  bottom: 0,
                  width: 30,
                  height: 30,
                }}
                onPress={() => setConfirmPassword(!confirmPassword)}>
                <Image
                  source={confirmPassword ? icons.disabled_eyes : icons.eyes}
                  style={{
                    width: 20,
                    height: 13,
                  }}
                />
              </TouchableOpacity>
            </View>

            {/* Transaction Pin */}
            <View style={{marginTop: SIZES.padding * 1}}>
              <TextInput
                style={{
                  backgroundColor: COLORS.darkCyan,
                  paddingHorizontal: SIZES.padding * 2,
                  height: 50,
                  color: COLORS.gray,
                  borderRadius: 10,
                  ...FONTS.body4,
                }}
                placeholder="Transaction Pin"
                placeholderTextColor={COLORS.textBlue}
                selectionColor={COLORS.textBlue}
                secureTextEntry={!pin}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 5,
                  bottom: 0,
                  width: 30,
                  height: 30,
                }}
                onPress={() => setPin(!pin)}>
                <Image
                  source={pin ? icons.disabled_eyes : icons.eyes}
                  style={{
                    width: 20,
                    height: 13,
                  }}
                />
              </TouchableOpacity>
            </View>

            {/* Transaction Pin */}
            <View style={{marginTop: SIZES.padding * 1}}>
              <TextInput
                style={{
                  backgroundColor: COLORS.darkCyan,
                  paddingHorizontal: SIZES.padding * 2,
                  height: 50,
                  color: COLORS.gray,
                  borderRadius: 10,
                  ...FONTS.body4,
                }}
                placeholder="Confirm Transaction Pin"
                placeholderTextColor={COLORS.textBlue}
                selectionColor={COLORS.textBlue}
                secureTextEntry={!confirmPin}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 5,
                  bottom: 0,
                  width: 30,
                  height: 30,
                }}
                onPress={() => setConfirmPin(!confirmPin)}>
                <Image
                  source={confirmPin ? icons.disabled_eyes : icons.eyes}
                  style={{
                    width: 20,
                    height: 13,
                  }}
                />
              </TouchableOpacity>
            </View>
          </Fragment>
        ) : null}

        {/* Terms & Conditions */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: SIZES.padding * 1,
          }}>
          <View style={{marginTop: SIZES.padding * 1}}>
            <CheckBox
              disabled={false}
              value={toggleTerms}
              onValueChange={newValue => setToggleTerms(newValue)}
            />
          </View>
          <View style={{marginTop: SIZES.padding * 1.5}}>
            <Text
              style={{
                color: COLORS.gray,
                marginLeft: 5,
                marginRight: SIZES.padding * 2,
                ...FONTS.body4,
              }}>
              By creating your account you agree with to our Terms and
              Conditions.
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderSubmitBtn() {
    return (
      <View
        style={{
          margin: SIZES.padding,
          paddingHorizontal: SIZES.padding * 2,
        }}>
        <TouchableOpacity
          style={{
            marginBottom: SIZES.padding * 2,
            height: 55,
            borderRadius: 10,
            backgroundColor: COLORS.deepOrange,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('OnboardBankAccount')}>
          <Text
            style={{
              color: COLORS.darkCyan,
              ...FONTS.body3,
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.primary}
        barStyle="#fff"
      />
      {renderHeader()}
      <ScrollView style={{flex: 1, backgroundColor: COLORS.primary}}>
        {renderHeaderCaption()}
        {renderForm()}
        {renderSubmitBtn()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OnboardBankAccount;
