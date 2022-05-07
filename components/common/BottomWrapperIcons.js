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
            navigation.navigate('DonationScreen')
          }
          style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.DonationIcon}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>Donations</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            console.log('Games pressed')
          }
          style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.Games}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>
          Games
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
           console.log('Betting pressed')
          }
          style={styleBankDashboard.dashboardOperationWrapper}>
          <View style={styleBankDashboard.dashboardOperationIconWrapper}>
            <Image
              source={icons.Betting}
              style={styleBankDashboard.dashboardOperationIcon}
            />
          </View>
          <Text style={styleBankDashboard.dashboardOperationText}>
          Betting
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default BottomDrawerIcons;
