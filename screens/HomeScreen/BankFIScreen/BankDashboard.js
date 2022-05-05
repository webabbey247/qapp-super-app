import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, icons, images} from '../../../constants';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {styleBankDashboard} from '../../../assets/css';
import BottomDrawerIcons from '../../../components/common/BottomWrapperIcons';

// import BottomDrawer from '../../../components/common/BottomDrawers';

const BankDashboard = ({navigation}) => {
  const [isOpen, SetIsOpen] = useState(true);

  // bottom drawer ref
  const bottomSheetRef = useRef(BottomSheet > null);

  //bottom drawer variables
  const snapPoints = useMemo(() => ['18%', '45%']);

  const handleSnapPress = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
    SetIsOpen(true);
  }, []);

  const renderHeader = (
    <View style={styleBankDashboard.homeScreenHeaderContainer}>
      <View style={styleBankDashboard.homeScreenHeaderLTR}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={styleBankDashboard.homeScreenHeaderLTRImgHolder}>
          <Image
            source={images.dummyUserIcon}
            style={styleBankDashboard.homeScreenHeaderLTRImg}
          />
        </TouchableOpacity>
        <View style={styleBankDashboard.homeScreenHeaderLTRTextHolder}>
          <Text style={styleBankDashboard.homeScreenHeaderLTRText}>
            Hello Charles
          </Text>
        </View>
      </View>

      <View style={styleBankDashboard.homeScreenHeaderRTL}>
        <LinearGradient
          colors={['#082F42', '#405660']}
          start={{x: 0.7, y: 0.3}}
          locations={[0.5, 1]}
          style={styleBankDashboard.homeScreenHeaderRTLImgHolder}>
          <Image
            source={icons.CarbonConnect}
            style={styleBankDashboard.homeScreenHeaderRTLImg}
          />
        </LinearGradient>

        <LinearGradient
          colors={['#082F42', '#405660']}
          start={{x: 0.7, y: 0.3}}
          locations={[0.5, 1]}
          style={styleBankDashboard.homeScreenHeaderRTLLastImgHolder}>
          <View>
            <Image
              source={icons.Notifications}
              style={styleBankDashboard.homeScreenHeaderRTLImg}
            />
          </View>
        </LinearGradient>
      </View>
    </View>
  );

  const renderAccountSummary = (
    <View style={styleBankDashboard.accountSummaryContainer}>
      <View style={styleBankDashboard.accountSummaryCircle}>
        <View style={styleBankDashboard.accountSummaryCircleWrapper}>
          <View style={styleBankDashboard.accountSummaryCircleImgHolder}>
            <Image
              source={images.dummyUserBank}
              style={styleBankDashboard.accountSummaryCircleImg}
            />
          </View>
          <View style={styleBankDashboard.accountSummaryCircleTextHolder}>
            <Text style={styleBankDashboard.accountSummaryCircleTextTop}>
              Balance
            </Text>
            <Text style={styleBankDashboard.accountSummaryCircleTextMiddle}>
              N75,000.00
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AccountGrid', {
                  typeUrl: 'history',
                })
              }>
              <Text style={styleBankDashboard.accountSummaryCircleTextBottom}>
                3 Accounts
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const renderTodayExpenses = (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Transaction', {
          typeUrl: 'Today',
        })
      }
      style={styleBankDashboard.todayExpensesContainer}>
      <LinearGradient
        colors={['#082F42', '#405660']}
        start={{x: 0.7, y: 0.3}}
        locations={[0.5, 1]}
        style={styleBankDashboard.todayExpensesWrapper}>
        <Text style={styleBankDashboard.todayExpensesTextHeader}>
          Spent Today
        </Text>
        <Text style={styleBankDashboard.todayExpensesTextParagraph}>
          N500.00
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.progressProfile]}
      start={{x: 3, y: 1}}
      end={{x: 1, y: 3}}
      style={{
        flex: 1,
      }}>
      <SafeAreaView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor={Platform.OS === 'ios' ? null : COLORS.deepBlue}
        />
        {renderHeader}
        {renderAccountSummary}
        {renderTodayExpenses}
        <BottomSheet
          ref={bottomSheetRef}
          initialSnapIndex={1}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          handleSnapPress={handleSnapPress}
          shouldMeasureContentHeight={true}
          onClose={() => SetIsOpen(false)}>
          <LinearGradient
            colors={[COLORS.progressProfile, COLORS.primary]}
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            style={{
              flex: 1,
            }}>
            <BottomSheetView>
              <BottomDrawerIcons />
            </BottomSheetView>
          </LinearGradient>
        </BottomSheet>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BankDashboard;
