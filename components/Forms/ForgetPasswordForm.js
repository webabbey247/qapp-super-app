import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS } from "../../constants";

import {
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
} from "../../assets/css";

const ForgetPasswordForm = () => {
  const [showOtp, setShowOtp] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <View style={styleFormComponents.formWrapper}>
        {/* Email Address */}
        <View style={{ marginVertical: SIZES.padding * 1.5 }}>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Email Address"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />
        </View>

        
      {/* Get OTP */}
       { showOtp && (
          <View style={{ marginVertical: SIZES.padding * 1.5 }}>
          <Text style={styleFormComponents.formLabel}>OTP</Text>
          <View>
            <TextInput
              style={styleFormComponents.defaultTextInput}
              placeholder=""
              placeholderTextColor={COLORS.textBlue}
              selectionColor={COLORS.textBlue}
              returnKeyType="done"
              maxLength={8}
            />

            <TouchableOpacity
              style={styleFormComponents.defaultTextInputHolder}
              onPress={() => console.log("Get code initiated")}
            >
              <Text style={{
                color: COLORS.grayColor,
                ...FONTS.body6,
              }}>Get code</Text>
            </TouchableOpacity>
          </View>
        </View>
       )}
      </View>
      <View
        style={[
          styleAuthScreen.authButtonWrapper,
          { marginVertical: SIZES.padding * 1},
        ]}
      >
        {showOtp ? (
          <TouchableOpacity
            style={styleButtons.defaultButton}
            onPress={() => navigation.navigate("NewPassword")}>
            <Text style={styleButtons.defaultButtonText}>Continue</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styleButtons.defaultButton}
            onPress={() => setShowOtp(true)}>
            <Text style={styleButtons.defaultButtonText}>Reset Password</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default ForgetPasswordForm;
