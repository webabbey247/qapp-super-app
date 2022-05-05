import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {FONTS, COLORS, SIZES, icons} from '../../constants';

const ChangeQAForm = () => {
  return (
    <Fragment>
      <View
        style={{
          marginTop: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 3,
        }}>
        {/* New Secret Question */}
        <View style={{marginTop: SIZES.padding * 0.5}}>
          <Text
            style={{
              color: COLORS.grayColor,
              ...FONTS.body6,
              marginVertical: SIZES.padding * 1,
            }}>
            New Secret Question
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
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 5,
                bottom: 0,
                width: 30,
                height: 30,
              }}
              onPress={() => console.log('Card Type')}>
              <Image
                source={icons.chevronCircleDown}
                style={{
                  width: 20,
                  height: 13,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/*  New Secret Answer */}
        <View style={{marginTop: SIZES.padding * 0.5}}>
          <Text
            style={{
              color: COLORS.grayColor,
              ...FONTS.body6,
              marginVertical: SIZES.padding * 1,
            }}>
            New Secret Answer
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

        {/*  Confirm Secret Answer */}
        <View style={{marginTop: SIZES.padding * 0.5}}>
          <Text
            style={{
              color: COLORS.grayColor,
              ...FONTS.body6,
              marginVertical: SIZES.padding * 1,
            }}>
            Confirm Secret Answer
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
          onPress={() => console.log('Change QA Successful')}
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
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default ChangeQAForm;
