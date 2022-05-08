import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const DonationSummaryScreen = () => {
  return (
    <>
     <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height:
                Platform.OS === "ios"
                  ? SIZES.height * 0.7
                  : SIZES.height * 0.45,
            }}
          >
            <View
              style={{
                marginVertical: SIZES.padding * 1,
              }}
            >
              <Text
                style={{
                  color: "#5CC4C4",
                  fontWeight: "700",
                  fontSize: 28,
                  lineHeight: 36,
                  textAlign: "center",
                }}
              >
              Donation Created
              </Text>
            </View>

            <View
              style={{
                marginTop: SIZES.padding * 2,
                backgroundColor: "#245973",
                width: SIZES.width * 0.85,
                paddingVertical: SIZES.padding * 1,
                paddingHorizontal: SIZES.padding * 2,
                // height: SIZES.height * 0.4,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "#F7F7F7",
                  fontWeight: "400",
                  fontSize: 15,
                  lineHeight: 19,
                  textAlign: "center",
                  opacity: 0.8,
                  marginVertical: SIZES.padding * 0.8,
                  paddingHorizontal: SIZES.padding * 6,
                }}
              >
               Donation link for RCCG Lekki Building
              </Text>
              <Text
                style={{
                  color: "#5CC4C4",
                  fontWeight: "700",
                  fontSize: 37,
                  lineHeight: 44,
                  textAlign: "center",
                  opacity: 0.8,
                  marginVertical: SIZES.padding * 1,
                  letterSpacing: -1.5,
                }}
              >
               http://surl.li/bvuef
              </Text>
              <Text
                style={{
                  color: "#F7F7F7",
                  fontWeight: "400",
                  fontSize: 10,
                  lineHeight: 13,
                  textAlign: "center",
                  opacity: 0.8,
                  marginTop: SIZES.padding * 0.7,
                  letterSpacing: 1,
                }}
              >
                Closing Date &amp; Time
              </Text>
              <Text
                style={{
                  color: "#F7F7F7",
                  fontWeight: "400",
                  fontSize: 10,
                  lineHeight: 13,
                  textAlign: "center",
                  opacity: 0.8,
                  paddingBottom: SIZES.padding * 1.3,
                  letterSpacing: 1,
                }}
              >
                
                June 12, 2022, 2:00pm
              </Text>
            </View>

            <View
              style={{
                width: SIZES.width * 0.85,
                marginVertical: SIZES.padding * 3,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 150,
                  height: 50,
                  borderRadius: 5,
                  backgroundColor: COLORS.breakerBay,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => console.log("Share transcript")}
              >
                <Text
                  style={{
                    color: COLORS.tangaroa,
                    fontWeight: "700",
                    fontSize: 17,
                    lineHeight: 22,
                  }}
                >
                  Share
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 150,
                  marginLeft: SIZES.padding * 2,
                  height: 50,
                  borderRadius: 5,
                  backgroundColor: COLORS.breakerBay,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => console.log("Download transcript")}
              >
                <Text
                  style={{
                    color: COLORS.tangaroa,
                    fontWeight: "700",
                    fontSize: 17,
                    lineHeight: 22,
                    textAlign: "center",
                  }}
                >
                  Download
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    </>
  );
};
