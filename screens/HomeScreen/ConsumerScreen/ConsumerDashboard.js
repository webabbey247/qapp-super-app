import React, {Fragment} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, icons} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {CustomHeader} from '../../../components/common';
import {styleGeneral} from '../../../assets/css';

const ConsumerDashboard = ({navigation}) => {
  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() => navigation.navigate('Login')}>
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
      colors={[COLORS.primary, COLORS.progressProfile]}
      start={{x: 3, y: 1}}
      end={{x: 1, y: 3}}
      style={{
        flex: 1,
      }}>
      <SafeAreaView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <StatusBar animated={true} barStyle="light-content" />
          {renderHeader}
          <ScrollView style={{flex: 1}}>
            <CustomHeader
              type="primary"
              title="QAPP Dashboard"
              subtitle="Welcome!"
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ConsumerDashboard;
