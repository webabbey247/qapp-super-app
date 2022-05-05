import React, {Fragment} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, COLORS, SIZES, icons} from '../../../../constants';
import {
  BlockCardForm,
  ReplaceCardPinForm,
  ReplaceCardForm,
} from '../../../../components/Forms';
import LinearGradient from 'react-native-linear-gradient';
import {styleBankDashboard, styleGeneral} from '../../../../assets/css';
import {CustomHeader} from '../../../../components/common';

const CardOperations = ({navigation, route}) => {
  const {typeUrl} = route.params;

  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() => navigation.navigate('CardGrid')}>
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
            {typeUrl === 'Pin' && (
              <CustomHeader
                type="primary"
                title="Retrieve Card Pin"
                subtitle="Fill in the details below to obtain a new card pin."
              />
            )}

            {typeUrl === 'Replace' && (
              <CustomHeader
                type="primary"
                title="Replace Card"
                subtitle="Provide reason(s) you want your card replaced."
              />
            )}

            {typeUrl === 'Block' && (
              <CustomHeader
                type="primary"
                title="Block Card"
                subtitle="Provide reason(s) you want your card blocked."
              />
            )}

            {typeUrl === 'Pin' && <ReplaceCardPinForm type="Replace" />}
            {typeUrl === 'Replace' && <ReplaceCardForm />}
            {typeUrl === 'Block' && <BlockCardForm />}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CardOperations;
