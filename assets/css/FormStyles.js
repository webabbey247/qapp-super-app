import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORS, SIZES, FONTS, images } from "../../constants";

const FormStyles = StyleSheet.create({
  searchFormContainer: {
    marginVertical: SIZES.padding * 1,
    marginHorizontal: SIZES.padding * 2,
  },

  searchFormTextInput: {
    backgroundColor: "rgba(94,170,168, 0.1)",
    paddingHorizontal: SIZES.padding * 2,
    height: 40,
    color: COLORS.grayColor,
    borderRadius: 20,
    borderWidth: 0.1,
    borderStyle: "solid",
    borderColor: "#D3F3FF",
    ...FONTS.body3,
  },

  searchFormIconButton: {
    position: 'absolute',
    top: 10,
    right: 5,
    bottom: 0,
    width: 30,
    height: 30,
  },

  searchFormIcon: {
    width: 20,
    height: 20,
  }

});

export { FormStyles };
