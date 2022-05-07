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
import {COLORS, icons, images} from '../../constants';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {styleBankDashboard} from '../../assets/css';
import BottomDrawerIcons from '../../components/common/BottomWrapperIcons';

const Dashboard = ({navigation}) => {
  const [isOpen, SetIsOpen] = useState(true);

  // bottom drawer ref
  const bottomSheetRef = useRef(BottomSheet > null);

  //bottom drawer variables
  const snapPoints = useMemo(() => ['18%', '20%']);

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
            Hello Eriggas
          </Text>
        </View>
      </View>

      <View style={styleBankDashboard.homeScreenHeaderRTL}>
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

export default Dashboard;
