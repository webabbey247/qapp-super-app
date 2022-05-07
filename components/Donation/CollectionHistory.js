import React from 'react';
import {
    View,
    Text,
  } from "react-native";
  import { DonationStyles } from "../../assets/css/DonationStyles";

const CollectionHistory = () => {
  return (
    <>
      <View style={DonationStyles.donationHistoryContainer}>
        <View style={DonationStyles.donationHistoryCard}>
          <View style={DonationStyles.donationHistoryCardPadding}>
            <Text style={DonationStyles.donationHistoryCardLTRTopText}>
            Jude’s Granny Burial
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
        </View>

        <View style={DonationStyles.donationHistoryCard}>
          <View style={DonationStyles.donationHistoryCardPadding}>
            <Text style={DonationStyles.donationHistoryCardLTRTopText}>
            Ify’s  Birthday
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
        </View>

        <View style={DonationStyles.donationHistoryCard}>
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
        </View>
      </View>
    </>
  )
}

export default CollectionHistory;