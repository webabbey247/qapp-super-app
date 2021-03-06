/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { WalkThroughForm } from '../../components/Forms';
import {COLORS, images} from '../../constants';
import {
  styleWalkThroughScreen,
} from '../../assets/css';

const Walkthrough = [
  {
    id: 1,
    header: 'One Account For Every Bank',
    sub_title:
      'Own your limits with custom design that lets you manage all your bank account in one space.',
    image: images.bannerOne,
  },
  {
    id: 2,
    header: 'One Account For Every Bank',
    sub_title:
      'Own your limits with custom design that lets you manage all your bank account in one space.',
    image: images.bannerOne,
  },
  {
    id: 3,
    header: 'One Account For Every Bank',
    sub_title:
      'Own your limits with custom design that lets you manage all your bank account in one space.',
    image: images.bannerOne,
  },
];

const WalkThrough = () => {
  const ImageSwiper = (
    <View style={styleWalkThroughScreen.swiperContainer}>
      <Swiper
        paginationStyle={styleWalkThroughScreen.swiperPaginationStyle}
        dotStyle={styleWalkThroughScreen.swiperDotStyle}
        activeDotColor={COLORS.deepOrange}
        activeDotStyle={styleWalkThroughScreen.swiperActiveDotStyle}>
        {Walkthrough.map((item, index) => {
          return (
            <View
            id={item.id}
              key={index}
              style={styleWalkThroughScreen.swiperViewContainer}>
              <View style={styleWalkThroughScreen.swiperImgHolder}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styleWalkThroughScreen.swiperImg}
                />
              </View>
              <View style={styleWalkThroughScreen.swiperTextWrapper}>
                <Text style={styleWalkThroughScreen.swiperTextHeader}>
                  {item.header}
                </Text>
                {/* <Text style={styleWalkThroughScreen.swiperTextSubtitle}>
                  {item.title}
                </Text> */}
                <Text style={styleWalkThroughScreen.swiperTextParagraph}>
                  {item.sub_title}
                </Text>
              </View>
            </View>
          );
        })}
      </Swiper>
    </View>
  );

  return (
    <LinearGradient
      colors={[COLORS.deepBlue, COLORS.progressProfile]}
      start={{x: 3, y: 1}}
      end={{x: 1, y: 3}}
      style={{
        flex: 1,
      }}>
      <SafeAreaView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <StatusBar animated={true} barStyle="light-content" />
        <View style={styleWalkThroughScreen.walkthroughContainer}>
          {ImageSwiper}
          <WalkThroughForm />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default WalkThrough;
