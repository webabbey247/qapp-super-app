/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, COLORS, SIZES, icons} from '../../constants';

const FinalScreen = ({navigation}) => {
  function rendeStatusContent() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          height:
            Platform.OS === 'ios' ? SIZES.height * 0.48 : SIZES.height * 0.45,
        }}>
        <Image
          source={icons.orangeSuccess}
          resizeMode="contain"
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '60%',
            height: 120,
          }}
        />
      </View>
    );
  }

  function renderText() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 1,
          paddingHorizontal: SIZES.padding * 2,
        }}>
        <Text
          style={{
            color: COLORS.grayColor,
            textAlign: 'center',
            ...FONTS.h4,
          }}>
          Password Reset Done!
        </Text>
      </View>
    );
  }

  function renderSubmitBtn() {
    return (
      <View
        style={{
          margin: SIZES.padding,
          paddingHorizontal: SIZES.padding * 2,
        }}>
        <TouchableOpacity
          style={{
            marginTop: SIZES.padding * 2,
            height: 55,
            borderRadius: 10,
            backgroundColor: COLORS.secondary,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: COLORS.darkCyan,
              ...FONTS.h4,
            }}>
            Back to login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.deepBlue}}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.deepBlue}
        barStyle="light-content"
      />
      <ScrollView style={{flex: 1, backgroundColor: COLORS.deepBlue}}>
        {rendeStatusContent()}
        {renderText()}
        {renderSubmitBtn()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FinalScreen;
