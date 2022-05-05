import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, COLORS, SIZES, icons, images} from '../../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {ChangeQAForm} from '../../../../components/Forms';

const ChangeQA = ({navigation}) => {
  const renderHeader = (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding * 1,
        paddingVertical:
          Platform.OS === 'ios' ? SIZES.padding * 1.2 : SIZES.padding * 0.2,
        backgroundColor: COLORS.primary,
      }}
      onPress={() => navigation.navigate('Settings')}>
      <View
        style={{
          backgroundColor: COLORS.darkCyan,
          borderRadius: 20,
          width: 40,
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: COLORS.black,
          borderWidth: 1,
          borderStyle: 'solid',
        }}>
        <Image
          source={icons.chevronLeft}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
          }}
        />
      </View>
    </TouchableOpacity>
  );

  const renderHeaderCaption = (
    <View
      style={{
        marginTop: SIZES.padding * 1,
        paddingHorizontal: SIZES.padding * 3,
      }}>
      <Text
        style={{
          color: COLORS.grayColor,
          ...FONTS.h2,
        }}>
        Security Question
      </Text>
      <Text
        style={{
          marginTop: SIZES.padding,
          color: COLORS.grayColor,
          ...FONTS.body3,
        }}>
        A short description is needed here... Thanks
      </Text>
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
        <StatusBar animated={true} barStyle="light-content" />
        {renderHeader}
        {renderHeaderCaption}
        <ScrollView style={{flex: 1}}>
          <ChangeQAForm />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ChangeQA;
