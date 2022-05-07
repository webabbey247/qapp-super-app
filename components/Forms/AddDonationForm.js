import React from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { styleFormComponents, styleAuthScreen, styleButtons } from "../../assets/css";
import { COLORS, SIZES, icons } from "../../constants";


const AddDonationForm = () => {
const navigation = useNavigation();
  return (
    <>
      <View style={styleFormComponents.formWrapper}>
        {/* Title */}
        <View>
        <Text style={styleFormComponents.formLabel}>Title</Text>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Title"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />
        </View>

        {/* Amount */}
        <View style={{ marginTop: SIZES.padding * 1 }}>
        <Text style={styleFormComponents.formLabel}>Amount</Text>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Amount"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />
        </View>

        {/* Closing Date & Time */}
        <View style={{ marginTop: SIZES.padding * 1 }}>
        <Text style={styleFormComponents.formLabel}>Closing Date & Time</Text>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder=""
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />

          <TouchableOpacity
            style={styleFormComponents.defaultTextInputIconHolder}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={icons.eyes}
              style={styleFormComponents.defaultTextInputIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Recieving Bank */}
        <View style={{ marginTop: SIZES.padding * 1 }}>
        <Text style={styleFormComponents.formLabel}>Recieving Bank</Text>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Select Bank"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />

          <TouchableOpacity
            style={styleFormComponents.defaultTextInputIconHolder}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={icons.eyes}
              style={styleFormComponents.defaultTextInputIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Account Number */}
        <View style={{ marginTop: SIZES.padding * 1 }}>
        <Text style={styleFormComponents.formLabel}>Account Number</Text>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Account Number"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />
        </View>

    
      </View>
      <View
        style={[
          styleAuthScreen.authButtonWrapper,
          {marginVertical: SIZES.padding * 2},
        ]}>
        <TouchableOpacity
          style={styleButtons.defaultButton} onPress={() => navigation.navigate('DonationScreen')}>
          <Text style={styleButtons.defaultButtonText}>Create Donation</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddDonationForm;
