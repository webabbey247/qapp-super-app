import React from 'react';
import {
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {GestureDetector} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const BottomDrawer = () => {
  return (
    <GestureDetector>
      <Animated.View
        style={{
          height: SIZES.height,
          width: '100%',
          backgroundColor: COLORS.white,
          position: 'absolute',
          top: SIZES.height / 1.5,
          borderRadius: 25,
        }}>
        <View
          style={{
            width: 75,
            height: 4,
            backgroundColor: COLORS.grayColor,
            alignSelf: 'center',
            marginVertical: SIZES.padding * 1,
            borderRadius: 4,
          }}></View>
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomDrawer;
