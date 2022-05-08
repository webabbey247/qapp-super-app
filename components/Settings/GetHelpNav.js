import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { icons } from "../../constants";
import { styleSettingsScreen } from "../../assets/css";

export default GetHelpNav = () => {
  return (
    <>
      <View style={styleSettingsScreen.profileNavContainer}>
        <TouchableOpacity style={styleSettingsScreen.profileNavChildWrapper}>
          <View style={styleSettingsScreen.profileNavChildLTR}>
            <View
              style={[
                styleSettingsScreen.profileNavChildLTRIconHolder,
                styleSettingsScreen.profileNavFirstChildBg,
              ]}
            >
              <Image
                source={icons.Phone}
                resizeMode="contain"
                style={[
                  styleSettingsScreen.profileNavChildLTRIcon,
                  styleSettingsScreen.profileNavFirstChildTintColor,
                ]}
              />
            </View>
            <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
              <Text style={styleSettingsScreen.profileNavChildLTRText}>
                Call Us
              </Text>
            </View>
          </View>

          <View style={styleSettingsScreen.profileNavChildRTL}>
            <Image
              source={icons.ChevronRight}
              resizeMode="contain"
              style={styleSettingsScreen.profileNavChildRTLImg}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styleSettingsScreen.profileNavChildWrapper}>
          <View style={styleSettingsScreen.profileNavChildLTR}>
            <View
              style={[
                styleSettingsScreen.profileNavChildLTRIconHolder,
                styleSettingsScreen.profileNavSecondChildBg,
              ]}
            >
              <Image
                source={icons.Comments}
                resizeMode="contain"
                style={[
                  styleSettingsScreen.profileNavChildLTRIcon,
                  styleSettingsScreen.profileNavSecondChildTintColor,
                ]}
              />
            </View>
            <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
              <Text style={styleSettingsScreen.profileNavChildLTRText}>
                Chat With Us
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styleSettingsScreen.profileNavChildWrapper}>
          <View style={styleSettingsScreen.profileNavChildLTR}>
            <View
              style={[
                styleSettingsScreen.profileNavChildLTRIconHolder,
                styleSettingsScreen.profileNavThirdChildBg,
              ]}
            >
              <Image
                source={icons.email}
                resizeMode="contain"
                style={[
                  styleSettingsScreen.profileNavChildLTRIcon,
                  styleSettingsScreen.profileNavThirdChildTintColor,
                ]}
              />
            </View>
            <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
              <Text style={styleSettingsScreen.profileNavChildLTRText}>
                Send an Email
              </Text>
            </View>
          </View>
          <View style={styleSettingsScreen.profileNavChildRTL}>
            <Image
              source={icons.ChevronRight}
              resizeMode="contain"
              style={styleSettingsScreen.profileNavChildRTLImg}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
