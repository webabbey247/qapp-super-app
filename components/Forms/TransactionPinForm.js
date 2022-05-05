import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {FONTS, COLORS, SIZES, icons} from '../../constants';

const TransactionPinForm = () => {
  return (
    <Fragment>
      <View
        style={{
          marginTop: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 3,
        }}>
        {/*  Current Transaction PIN */}
        <View style={{marginTop: SIZES.padding * 0.5}}>
          <Text
            style={{
              color: COLORS.grayColor,
              ...FONTS.body6,
              marginVertical: SIZES.padding * 1,
            }}>
            Current Transaction PIN
          </Text>
          <View>
            <TextInput
              style={{
                backgroundColor: COLORS.darkCyan,
                paddingHorizontal: SIZES.padding * 2,
                height: 50,
                color: COLORS.grayColor,
                borderRadius: 10,
                ...FONTS.body3,
              }}
              placeholder=""
              placeholderTextColor={COLORS.textBlue}
              selectionColor={COLORS.textBlue}
              returnKeyType="next"
            />
          </View>
        </View>

        {/*  New Transaction PIN */}
        <View style={{marginTop: SIZES.padding * 0.5}}>
          <Text
            style={{
              color: COLORS.grayColor,
              ...FONTS.body6,
              marginVertical: SIZES.padding * 1,
            }}>
            New Transaction PIN
          </Text>
          <View>
            <TextInput
              style={{
                backgroundColor: COLORS.darkCyan,
                paddingHorizontal: SIZES.padding * 2,
                height: 50,
                color: COLORS.grayColor,
                borderRadius: 10,
                ...FONTS.body3,
              }}
              placeholder=""
              placeholderTextColor={COLORS.textBlue}
              selectionColor={COLORS.textBlue}
              returnKeyType="done"
            />
          </View>
        </View>

        {/*  Confirm Transaction PIN */}
        <View style={{marginTop: SIZES.padding * 0.5}}>
          <Text
            style={{
              color: COLORS.grayColor,
              ...FONTS.body6,
              marginVertical: SIZES.padding * 1,
            }}>
            Confirm Transaction PIN
          </Text>
          <View>
            <TextInput
              style={{
                backgroundColor: COLORS.darkCyan,
                paddingHorizontal: SIZES.padding * 2,
                height: 50,
                color: COLORS.grayColor,
                borderRadius: 10,
                ...FONTS.body3,
              }}
              placeholder=""
              placeholderTextColor={COLORS.textBlue}
              selectionColor={COLORS.textBlue}
              returnKeyType="done"
            />
          </View>
        </View>
      </View>

      {/* Submit Button */}
      <View
        style={{
          margin: SIZES.padding,
          paddingHorizontal: SIZES.padding * 2,
        }}>
        <TouchableOpacity
          onPress={() => console.log('Change Transaction Pin Successful')}
          style={{
            marginTop: SIZES.padding * 2.5,
            height: 55,
            borderRadius: 10,
            backgroundColor: COLORS.secondary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: COLORS.darkCyan,
              ...FONTS.h4,
            }}>
            Save New Pin
          </Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default TransactionPinForm;
