import React, {Fragment, useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, SIZES, icons, FONTS} from '../../constants';

import {
  styleGeneral,
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
} from '../../assets/css';

const NewPasswordForm = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  return (
    <Fragment>
      <View style={styleFormComponents.formWrapper}>
        {/* Password */}
        <View style={{marginTop: SIZES.padding * 1.5}}>
          <View>
            <TextInput
              style={styleFormComponents.defaultTextInput}
              placeholder="Password"
              placeholderTextColor={COLORS.textBlue}
              selectionColor={COLORS.textBlue}
              secureTextEntry={!showPassword}
              returnKeyType="done"
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

          <Text style={styleFormComponents.formBottomLabel}>
            Must be at least 8 character.
          </Text>
        </View>

        {/* Confirm Password */}
        <View style={{marginTop: SIZES.padding * 1.5}}>
          <View>
            <TextInput
              style={styleFormComponents.defaultTextInput}
              placeholder="Confirm Password"
              placeholderTextColor={COLORS.textBlue}
              selectionColor={COLORS.textBlue}
              secureTextEntry={!confirmPassword}
              returnKeyType="done"
            />
            <TouchableOpacity
              style={styleFormComponents.defaultTextInputIconHolder}
              onPress={() => setConfirmPassword(!confirmPassword)}>
              <Image
                source={confirmPassword ? icons.disabled_eyes : icons.eyes}
                style={styleFormComponents.defaultTextInputIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styleFormComponents.formBottomLabel}>
            Must be at least 8 character.
          </Text>
        </View>
      </View>
      <View
        style={[
          styleAuthScreen.authButtonWrapper,
          {marginVertical: SIZES.padding * 3},
        ]}>
        <TouchableOpacity
          style={styleButtons.defaultButton}
          onPress={() => navigation.navigate('FinalScreen')}>
          <Text style={styleButtons.defaultButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default NewPasswordForm;
