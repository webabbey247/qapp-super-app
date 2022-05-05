/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {COLORS, SIZES, FONTS, walkthrough} from '../../constants';

const VanillaSample = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {walkthrough.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.textBlue, COLORS.darkCyan, COLORS.textBlue],
            extrapolate: 'clamps',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 10,
                marginHorizontal: 6,
                width: 12,
                height: 12,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderFooterContent() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: SIZES.height * 0.2,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
        }}>
        <Dots />

        <View
          style={{
            flexDirection: 'column',
            height: 60,
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: COLORS.deepOrange,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
            onPress={() => navigation.navigate('FinalScreen')}>
            <Text
              style={{
                color: COLORS.darkCyan,
                ...FONTS.body3,
              }}>
              Send Mail
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: COLORS.deepOrange,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('FinalScreen')}>
            <Text
              style={{
                color: COLORS.darkCyan,
                ...FONTS.body3,
              }}>
              Send Mail
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <View style={{flex: 1, backgroundColor: COLORS.primary}}>
        <Animated.FlatList
          data={walkthrough}
          keyExtrator={item => item.id}
          horizontal
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showHorizontalScrollIndicator={false}
          scrollEventThrottle={15}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: SIZES.width,
                  justifyContent: 'center',
                }}>
                {/* walkthrough images */}
                <View
                  style={
                    {
                      // flex: 1,
                    }
                  }>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{width: '50%', height: 100}}
                  />
                </View>

                {/* walkthrough title & subtitle */}
                <View
                  style={{
                    height: SIZES.height * 0.45,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding * 2,
                  }}>
                  <Text
                    style={{
                      ...FONTS.h1,
                      color: COLORS.white,
                      paddingHorizontal: SIZES.padding,
                      textAlign: 'center',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginTop: SIZES.padding * 2,
                      ...FONTS.body3,
                      color: COLORS.gray,
                      textAlign: 'center',
                    }}>
                    {item.sub_title}
                  </Text>
                </View>
              </View>
            );
          }}
        />

        {renderFooterContent()}
      </View>
    </SafeAreaView>
  );
};

export default VanillaSample;
