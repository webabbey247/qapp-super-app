import React from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {COLORS, icons } from "../../constants";
import { styleGeneral } from "../../assets/css";
import { DonationSummaryScreen } from "../../components/Donation/DonationSummaryScreen";
import { DonationPaymentScreen } from "../../components/Donation/DonationPaymentScreen";

const SummaryScreen = ({ route, navigation }) => {
  const { typeUrl } = route.params;

  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() => navigation.navigate("DonationScreen")}
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
      colors={[COLORS.deepBlue, COLORS.progressProfile]}
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
        <StatusBar
          animated={true}
          backgroundColor={COLORS.deepBlue}
          barStyle="light-content"
        />
        {renderHeader}
        <ScrollView style={{ flex: 1 }}>
          {typeUrl === "createLink" && <DonationSummaryScreen />}
          {typeUrl === "donateFunds" && <DonationPaymentScreen />}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SummaryScreen;
