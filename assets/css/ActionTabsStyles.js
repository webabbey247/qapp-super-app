import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORS, SIZES, FONTS, images } from "../../constants";

const ActionTabStyles = StyleSheet.create({
  actionTabsContainer: {
    marginTop: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical: SIZES.padding * 1,
  },

  actionTabsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.darkCyan,
    paddingVertical: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding * 0.5,
    borderRadius: 5,
    height: 45,
  },

  actionTabsTab: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding * 1,
    width: "50%",
  },

  actionTabsActiveTab: {
    borderColor: COLORS.deepBlue,
    backgroundColor: COLORS.deepBlue,
  },

  actionTabsInActiveTab: {
    borderColor: COLORS.transparent,
    backgroundColor: COLORS.transparent,
  },

  actionTabsTabText: {
    color: COLORS.grayColor,
    textAlign: "center",
    ...FONTS.body4,
  },
});

export { ActionTabStyles };
