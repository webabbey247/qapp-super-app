import React, { useState } from "react";
import {
  TouchableOpacity,
  StatusBar,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons, images } from "../../constants";
import LinearGradient from "react-native-linear-gradient";
import { styleGeneral, styleSettingsScreen } from "../../assets/css";
import SettingsNav from "../../components/Settings/SettingsNav";
import GetHelpNav from "../../components/Settings/GetHelpNav";
import { CustomHeader } from "../../components/common";

const Settings = ({ navigation }) => {
  const [activeGetHelp, setActiveGetHelp] = useState(false);

  const ProfileInfo = () => {
    return (
      <View style={styleSettingsScreen.profileContainer}>
        <View style={styleSettingsScreen.profileTopTextWrapper}>
          <Text style={styleSettingsScreen.profileTopTextHeader}>
            Personal Information
          </Text>
        </View>

        <View style={styleSettingsScreen.profileBottomWrapper}>
          <View style={styleSettingsScreen.profileBottomImgHolder}>
            <Image
              source={images.dummyUserIcon}
              style={styleSettingsScreen.profileBottomImg}
            />
          </View>

          <View style={styleSettingsScreen.profileBottomTextHolder}>
            <Text style={styleSettingsScreen.profileBottomTextFullName}>
              Eriggas Frank
            </Text>
            <Text style={styleSettingsScreen.profileBottomTextEmailAddress}>
              errigasfrank@gmail.com
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() => {
        navigation.navigate(activeGetHelp ? "Settings" : "Dashboard"),
          setActiveGetHelp(false);
      }}
    >
      <View style={styleGeneral.generalHeaderImgHolder}>
        <Image
          source={icons.chevronLeft}
          resizeMode="contain"
          style={styleGeneral.generalHeaderImg}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.progressProfile]}
      start={{ x: 3, y: 1 }}
      end={{ x: 1, y: 3 }}
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <StatusBar animated={true} barStyle="light-content" />
        {renderHeader}
        {activeGetHelp ? (
          <CustomHeader
            type="primary"
            title="Get Help"
            subtitle=""
          />
        ) : (
          <ProfileInfo />
        )}

        <ScrollView style={{ flex: 1 }}>
          {activeGetHelp ? (
            <GetHelpNav />
          ) : (
            <SettingsNav setActiveGetHelp={setActiveGetHelp} />
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Settings;
