import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../../constants";
import {
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
} from "../../assets/css";

const UpdatePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  return (
    <>
      <View style={styleFormComponents.formWrapper}>
        {/* Old Password */}
        <View style={{ marginTop: SIZES.padding * 1.5 }}>
          <View>
            <TextInput
              style={styleFormComponents.defaultTextInput}
              placeholder="Old Password"
              placeholderTextColor={COLORS.textBlue}
              selectionColor={COLORS.textBlue}
              secureTextEntry={!oldPassword}
              returnKeyType="done"
            />

            <TouchableOpacity
              style={styleFormComponents.defaultTextInputIconHolder}
              onPress={() => setOldPassword(!oldPassword)}
            >
              <Image
                source={oldPassword ? icons.disabled_eyes : icons.eyes}
                style={styleFormComponents.defaultTextInputIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styleFormComponents.formBottomLabel}>
            Must be at least 8 character.
          </Text>
        </View>

        {/* New Password */}
        <View style={{ marginTop: SIZES.padding * 1.5 }}>
          <View>
            <TextInput
              style={styleFormComponents.defaultTextInput}
              placeholder="New Password"
              placeholderTextColor={COLORS.textBlue}
              selectionColor={COLORS.textBlue}
              secureTextEntry={!password}
              returnKeyType="done"
            />

            <TouchableOpacity
              style={styleFormComponents.defaultTextInputIconHolder}
              onPress={() => setPassword(!password)}
            >
              <Image
                source={password ? icons.disabled_eyes : icons.eyes}
                style={styleFormComponents.defaultTextInputIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styleFormComponents.formBottomLabel}>
            Must be at least 8 character.
          </Text>
        </View>

        {/* Confirm Password */}
        <View style={{ marginTop: SIZES.padding * 1.5 }}>
          <View>
            <TextInput
              style={styleFormComponents.defaultTextInput}
              placeholder="Confirm New Password"
              placeholderTextColor={COLORS.textBlue}
              selectionColor={COLORS.textBlue}
              secureTextEntry={!confirmPassword}
              returnKeyType="done"
            />
            <TouchableOpacity
              style={styleFormComponents.defaultTextInputIconHolder}
              onPress={() => setConfirmPassword(!confirmPassword)}
            >
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
          { marginVertical: SIZES.padding * 3 },
        ]}
      >
        <TouchableOpacity
          style={styleButtons.defaultButton} onPress={() => console.log('password updated successfully')}
        >
          <Text style={styleButtons.defaultButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UpdatePasswordForm;
