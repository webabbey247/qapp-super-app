import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, icons} from '../../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {TransferOperationForm} from '../../../../components/Forms';
import {styleGeneral} from '../../../../assets/css';

const TransferOperations = ({navigation}) => {
  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() => navigation.navigate('BankDashboard')}>
      <View style={styleGeneral.generalHeaderImgHolder}>
        <Image
          source={icons.closeIcon}
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
            <TransferOperationForm />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default TransferOperations;
