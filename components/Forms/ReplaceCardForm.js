import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {COLORS, SIZES, icons} from '../../constants';
import {
  styleFormComponents,
  styleAuthScreen,
  styleButtons,
} from '../../assets/css';
import {useNavigation} from '@react-navigation/native';

const ReplaceCardForm = () => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <View
        style={{
          marginTop: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 3,
        }}>
        {/*Reason */}
        <View style={{marginTop: SIZES.padding * 1}}>
          <Text style={styleFormComponents.formLabel}>Reason</Text>
          <TouchableOpacity
            onPress={() => console.log('reason indicated')}
            style={styleFormComponents.defaultTextInput}>
            <Text
              style={{
                color: COLORS.textBlue,
                marginTop: SIZES.padding * 1.5,
              }}>
              Suspected fraud
            </Text>
            <View style={styleFormComponents.defaultTextInputIconHolder}>
              <Image
                source={icons.chevronCircleDown}
                style={styleFormComponents.defaultTextInputIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styleAuthScreen.authButtonWrapper,
          {marginVertical: SIZES.padding * 3},
        ]}>
        <TouchableOpacity
          style={styleButtons.defaultButton}
          onPress={() =>
            navigation.navigate('OTPSignUp', {
              typeUrl: 'Replace',
            })
          }>
          <Text style={styleButtons.defaultButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default ReplaceCardForm;
