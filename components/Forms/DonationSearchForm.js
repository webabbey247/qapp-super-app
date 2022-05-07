import React from "react";
import { View, TouchableOpacity, Image, TextInput } from "react-native";
import { COLORS, icons } from "../../constants";
import { FormStyles } from "../../assets/css/FormStyles";

const DonationSearchForm = () => {
  return (
    <>
      <View style={FormStyles.searchFormContainer}>
        <TextInput
          style={FormStyles.searchFormTextInput}
          placeholder="Search"
          placeholderTextColor={COLORS.breakerBay}
          selectionColor={COLORS.textBlue}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={FormStyles.searchFormIconButton}
          onPress={() => console.log("Search is active")}
        >
          <Image source={icons.Search} style={FormStyles.searchFormIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DonationSearchForm;
