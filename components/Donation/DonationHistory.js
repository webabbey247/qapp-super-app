import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DonationStyles } from "../../assets/css/DonationStyles";
import { useNavigation } from "@react-navigation/native";

const DonationHistory = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={DonationStyles.donationHistoryContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("InitiateDonation")}
          style={DonationStyles.donationHistoryCard}
        >
          <View style={DonationStyles.donationHistoryCardPadding}>
            <Text style={DonationStyles.donationHistoryCardLTRTopText}>
              RCCG Lekki Building
            </Text>
            <Text style={DonationStyles.donationHistoryCardLTRBottomText}>
              Closing: June 1, 2022 2:00pm
            </Text>
          </View>
          <View style={DonationStyles.donationHistoryCardPadding}>
            <Text style={DonationStyles.donationHistoryCardRTLTopText}>
              N34,000.00
            </Text>
            <Text style={DonationStyles.donationHistoryCardRTLBottomText}>
              N2,000.00
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("InitiateDonation")}
          style={DonationStyles.donationHistoryCard}
        >
          <View style={DonationStyles.donationHistoryCardPadding}>
            <Text style={DonationStyles.donationHistoryCardLTRTopText}>
              RCCG Lekki Building
            </Text>
            <Text style={DonationStyles.donationHistoryCardLTRBottomText}>
              Closing: June 1, 2022 2:00pm
            </Text>
          </View>
          <View style={DonationStyles.donationHistoryCardPadding}>
            <Text style={DonationStyles.donationHistoryCardRTLTopText}>
              N34,000.00
            </Text>
            <Text style={DonationStyles.donationHistoryCardRTLBottomText}>
              N2,000.00
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("InitiateDonation")}
          style={DonationStyles.donationHistoryCard}
        >
          <View style={DonationStyles.donationHistoryCardPadding}>
            <Text style={DonationStyles.donationHistoryCardLTRTopText}>
              RCCG Lekki Building
            </Text>
            <Text style={DonationStyles.donationHistoryCardLTRBottomText}>
              Closing: June 1, 2022 2:00pm
            </Text>
          </View>
          <View style={DonationStyles.donationHistoryCardPadding}>
            <Text style={DonationStyles.donationHistoryCardRTLTopText}>
              N34,000.00
            </Text>
            <Text style={DonationStyles.donationHistoryCardRTLBottomText}>
              N2,000.00
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DonationHistory;
