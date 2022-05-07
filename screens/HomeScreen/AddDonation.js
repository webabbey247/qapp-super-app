import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS, COLORS, SIZES, icons, images } from "../../constants";
import LinearGradient from "react-native-linear-gradient";
import { styleGeneral } from "../../assets/css";
import { CustomHeader } from "../../components/common";
import AddDonationForm from "../../components/Forms/AddDonationForm";

const AddDonation = ({ navigation }) => {
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

  return (
    <>
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
          style={{ flex: 1, backgroundColor: COLORS.transparent }}
        >
          <StatusBar animated={true} barStyle="light-content" />
          {renderHeader}
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <CustomHeader
              type="primary"
              title="Create Donation"
              subtitle="Neque porro quisquam est qui dolorem ipsum quia."
            />
            <AddDonationForm />
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default AddDonation;
