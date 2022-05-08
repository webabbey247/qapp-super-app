import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORS, SIZES, FONTS, images } from "../../constants";

const ProfileStyles = StyleSheet.create({
  // Profile Image
  ProfileIconFormWrapper: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ProfileIconWrapper: {
    width: 65,
    height: 65,
    marginRight: SIZES.padding * 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.progressProfile,
    borderWidth: 1,
    borderStyle: "solid",
  },

  ProfileIcon: {
    width: 55,
    height: 55,
  },

  profileUploadIconWrapper: {
    paddingVertical: SIZES.padding * 1.5,
  },

  profileUploadIcon: {
    width: 25,
    height: 25,
  },
});

export { ProfileStyles };
