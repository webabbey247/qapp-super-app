import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {icons} from '../../constants';
import {styleBankDashboard} from '../../assets/css';

const BottomDrawerIcons = () => {
  const navigation = useNavigation();
  return (
    <View style={styleBankDashboard.bottomDrawerContainer}>
      <View style={styleBankDashboard.dashboardOperationContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AccountGrid', {
              typeUrl: 'deposit',
            })
          }
          style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.DepositIcon}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>Deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AccountGrid', {
              typeUrl: 'withdraw',
            })
          }
          style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.WithdrawIcon}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>
            Withdraw
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AccountGrid', {
              typeUrl: 'transfer',
            })
          }
          style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.SendIcon}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>
            Transfer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('CardGrid')}
          // onPress={() => setCardModalVisible(true)}
          style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.CreditCardIcon}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>Card</Text>
        </TouchableOpacity>
      </View>

      <View style={styleBankDashboard.dashboardOperationContainer}>
        <TouchableOpacity style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.AirtimeIcon}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>Top Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.UtilityIcon}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>Utility</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.QRCode}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>QR Code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.Loan}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>Loan</Text>
        </TouchableOpacity>
      </View>

      <View style={styleBankDashboard.dashboardOperationContainer}>
        <TouchableOpacity style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.Donations}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>
            Donation
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.FXTransfer}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>
            FX Transfer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.Games}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>Games</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.Betting}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>Betting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomDrawerIcons;
