import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORS, SIZES, FONTS, images } from "../../constants";

const DonationStyles = StyleSheet.create({
  donationHeaderContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical:
      Platform.OS === "ios" ? SIZES.padding * 1.2 : SIZES.padding * 0.2,
  },

  donationHeaderText: {
    color: COLORS.grayColor,
    ...FONTS.h2,
  },
  donationHeaderIcon: {
    width: 30,
    height: 30,
  },

  donationHistoryContainer: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    paddingVertical: SIZES.padding * 1,
  },

  donationHistoryCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
    paddingVertical: SIZES.padding * 1.6,
    borderBottomWidth: 0.17,
    borderColor: "#F7F7F7",
  },

  donationHistoryCardPadding: {
    paddingHorizontal: SIZES.padding * 2,
  },

  donationHistoryCardLTRTopText: {
    fontSize: 14,
    color: "#F7F7F7",
    lineHeight: 16,
    opacity: 0.8,
  },

  donationHistoryCardLTRBottomText: {
    marginTop: SIZES.padding * 0.3,
    fontSize: 10,
    color: "#5EAAA8",
    lineHeight: 16,
    opacity: 0.8,
  },

  donationHistoryCardRTLTopText: {
    fontSize: 14,
    color: "#21B013",
    lineHeight: 16,
    opacity: 0.8,
    fontWeight: "700",
    textAlign: "right",
  },

  donationHistoryCardRTLBottomText: {
    marginTop: SIZES.padding * 0.3,
    fontSize: 12,
    color: "#FF5353",
    lineHeight: 16,
    opacity: 0.8,
    fontWeight: "700",
    textAlign: "right",
  },
});

export { DonationStyles };
