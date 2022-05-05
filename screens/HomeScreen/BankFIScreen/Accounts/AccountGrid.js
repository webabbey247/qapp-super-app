import React, {Fragment} from 'react';
import {
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons} from '../../../../constants';
// import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {styleBankDashboard} from '../../../../assets/css';

const AccountGrid = ({navigation, route}) => {
  const {typeUrl} = route.params;

  return (
    <LinearGradient
      colors={['#81adc2', '#09354A']}
      start={{x: 0.5, y: 0.5}}
      locations={[0.27, 1.0]}
      style={{
        flex: 1,
      }}>
      <SafeAreaView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <StatusBar animated={true} barStyle="light-content" />
        <ScrollView style={{flex: 1}}>
          <View style={styleBankDashboard.accountGridContainer}>
            {typeUrl === 'history' && (
              <Fragment>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Transaction', {
                      typeUrl: 'All',
                    })
                  }
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N75,000.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    0342880912
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Transaction', {
                      typeUrl: 'All',
                    })
                  }
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N42,600.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    2142880934
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Transaction', {
                      typeUrl: 'All',
                    })
                  }
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N6,000.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    0342880912
                  </Text>
                </TouchableOpacity>
              </Fragment>
            )}

            {typeUrl === 'deposit' && (
              <Fragment>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DepositOperations')}
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N75,000.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    0342880912
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('DepositOperations')}
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N42,600.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    2142880934
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('DepositOperations')}
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N6,000.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    0342880912
                  </Text>
                </TouchableOpacity>
              </Fragment>
            )}

            {typeUrl === 'withdraw' && (
              <Fragment>
                <TouchableOpacity
                  onPress={() => navigation.navigate('WithdrawalOperations')}
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N75,000.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    0342880912
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('WithdrawalOperations')}
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N42,600.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    2142880934
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('WithdrawalOperations')}
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N6,000.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    0342880912
                  </Text>
                </TouchableOpacity>
              </Fragment>
            )}

            {typeUrl === 'transfer' && (
              <Fragment>
                <TouchableOpacity
                  onPress={() => navigation.navigate('TransferOperations')}
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N75,000.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    0342880912
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('TransferOperations')}
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N42,600.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    2142880934
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('TransferOperations')}
                  style={styleBankDashboard.accountGridCard}>
                  <Text style={styleBankDashboard.accountGridCardName}>
                    Ellem Kuti
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardAmount}>
                    N6,000.00
                  </Text>
                  <Text style={styleBankDashboard.accountGridCardNumber}>
                    0342880912
                  </Text>
                </TouchableOpacity>
              </Fragment>
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate('BankDashboard')}
              style={styleBankDashboard.accountGridFooter}>
              <Image
                source={icons.ArrowDown}
                resizeMode="contain"
                style={styleBankDashboard.accountGridFooterImg}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AccountGrid;
