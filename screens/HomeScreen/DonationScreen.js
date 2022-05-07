import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons, FONTS, SIZES } from "../../constants";
import { styleGeneral } from "../../assets/css";
import LinearGradient from "react-native-linear-gradient";
import { DonationStyles } from "../../assets/css/DonationStyles";
import { ActionTabStyles } from "../../assets/css/ActionTabsStyles";
import { DonationSearchForm } from "../../components/Forms";
import DonationHistory from "../../components/Donation/DonationHistory";
import CollectionHistory from "../../components/Donation/CollectionHistory";

const DonationScreen = ({navigation}) => {
  const [toggleActionTab, setToggleActionTab] = useState(true);

  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() => navigation.navigate("Dashboard")}
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


  const renderSearchHeader = (
    <View style={DonationStyles.donationHeaderContainer}>
      <Text style={DonationStyles.donationHeaderText}>Donations</Text>
      <TouchableOpacity onPress={() => navigation.navigate("AddDonation")}>
      <Image 
        source={icons.donationIcon}
        resizeMode="contain"
        style={DonationStyles.donationHeaderIcon}
      />
      </TouchableOpacity>
     
    </View>
  );


  const renderActionTabs = (
    <View style={ActionTabStyles.actionTabsContainer}>
      <View style={ActionTabStyles.actionTabsWrapper}>
        <TouchableOpacity
          style={[
            ActionTabStyles.actionTabsTab,
            toggleActionTab
              ? ActionTabStyles.actionTabsActiveTab
              : ActionTabStyles.actionTabsInActiveTab,
          ]}
          onPress={() => {
            setToggleActionTab(true);
          }}>
          <Text style={ActionTabStyles.actionTabsTabText}>Collections</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            ActionTabStyles.actionTabsTab,
            toggleActionTab
              ? ActionTabStyles.actionTabsInActiveTab
              : ActionTabStyles.actionTabsActiveTab,
          ]}
          onPress={() => {
            setToggleActionTab(false);
          }}
        >
          <Text style={ActionTabStyles.actionTabsTabText}>Donations</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


  return (
    <>
      <LinearGradient
        colors={[COLORS.deepBlue, COLORS.progressProfile]}
        start={{ x: 3, y: 1 }}
        end={{ x: 1, y: 3 }}
        style={{
          flex: 1,
        }}>
        <SafeAreaView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}>
          <KeyboardAvoidingView style={{ flex: 1 }}>
            <StatusBar animated={true} barStyle="light-content" />
            {renderHeader}
            {renderSearchHeader}
            <DonationSearchForm />
            {renderActionTabs}
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}>
              {toggleActionTab ? <DonationHistory /> : <CollectionHistory />}
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default DonationScreen;
