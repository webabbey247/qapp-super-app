import React, { Fragment } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS } from "../../constants";
import {
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
  styleFooter,
} from "../../assets/css";

const OTPForm = ({ typeUrl }) => {
  // const {typeUrl} = route.params;
  const navigation = useNavigation();

  const renderFooter = (
    <TouchableOpacity
      style={styleAuthScreen.authOTPFooterWrapper}
      onPress={() => navigation.navigate("Login")}
    >
      <Text style={styleFooter.authOTPFooterText}>
        Didn’t you receive the OTP?
        <Text style={styleFooter.footerSecondaryText}>{""} Resend OTP</Text>
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
        <TouchableOpacity
          style={styleButtons.secondaryButton}
          onPress={() =>
            navigation.navigate('Login')
          }>
          <Text style={styleButtons.secondaryButtonText}>Continue</Text>
        </TouchableOpacity>
        
      </View>
    </Fragment>
  );
};

export default OTPForm;
