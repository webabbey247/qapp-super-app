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
import {styleGeneral, styleSettingsScreen} from '../../../../assets/css';

const GetHelp = ({navigation}) => {
  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() => navigation.navigate('Settings')}>
      <View style={styleGeneral.generalHeaderImgHolder}>
        <Image
          source={icons.chevronLeft}
          resizeMode="contain"
          style={styleGeneral.generalHeaderImg}
        />
      </View>
    </TouchableOpacity>
  );

  const renderNavLinks = (
    <View style={styleSettingsScreen.profileNavContainer}>
      <TouchableOpacity style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavFirstChildBg,
            ]}>
            <Image
              source={icons.Phone}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavFirstChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>
              Call Us
            </Text>
          </View>
        </View>

        <View style={styleSettingsScreen.profileNavChildRTL}>
          <Image
            source={icons.ChevronRight}
            resizeMode="contain"
            style={styleSettingsScreen.profileNavChildRTLImg}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavSecondChildBg,
            ]}>
            <Image
              source={icons.Comments}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavSecondChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>
              Chat With Us
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavThirdChildBg,
            ]}>
            <Image
              source={icons.email}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavThirdChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>
              Send an Email
            </Text>
          </View>
        </View>
        <View style={styleSettingsScreen.profileNavChildRTL}>
          <Image
            source={icons.ChevronRight}
            resizeMode="contain"
            style={styleSettingsScreen.profileNavChildRTLImg}
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  // const renderNavLinks = (
  //   <View
  //     style={{
  //       flexDirection: 'column',
  //       paddingVertical:
  //         Platform.OS === 'ios' ? SIZES.padding * 1 : SIZES.padding * 0.2,
  //       paddingHorizontal: SIZES.padding * 2,
  //     }}>
  //     <View
  //       style={{
  //         marginVertical: SIZES.padding * 1,
  //       }}>
  //       <Text
  //         style={{
  //           color: COLORS.grayColor,
  //           ...FONTS.body4,
  //         }}>
  //         Get Help
  //       </Text>
  //     </View>
  //     <TouchableOpacity
  //       style={{
  //         flexDirection: 'row',
  //         justifyContent: 'space-between',
  //         marginVertical: SIZES.padding * 1,
  //       }}>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           justifyContent: 'flex-start',
  //         }}>
  //         <View
  //           style={{
  //             backgroundColor: 'rgba(35, 133, 217, 0.2)',
  //             borderRadius: 20,
  //             width: 36,
  //             height: 36,
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //             marginRight: SIZES.padding * 1.5,
  //           }}>
  //           <Image
  //             source={icons.Phone}
  //             resizeMode="contain"
  //             style={{
  //               width: 20,
  //               height: 20,
  //               tintColor: '#2385D9',
  //             }}
  //           />
  //         </View>
  //         <View
  //           style={{
  //             marginTop: SIZES.padding * 0.5,
  //           }}>
  //           <Text
  //             style={{
  //               ...FONTS.body3,
  //               color: COLORS.white,
  //             }}>
  //             Call Us
  //           </Text>
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           backgroundColor: '#0B415B',
  //           borderRadius: 5,
  //           width: 34,
  //           height: 34,
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>
  //         <Image
  //           source={icons.ChevronRight}
  //           resizeMode="contain"
  //           style={{
  //             width: 20,
  //             height: 20,
  //           }}
  //         />
  //       </View>
  //     </TouchableOpacity>

  //     <TouchableOpacity
  //       style={{
  //         flexDirection: 'row',
  //         justifyContent: 'space-between',
  //         marginVertical: SIZES.padding * 1,
  //       }}>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           justifyContent: 'flex-start',
  //         }}>
  //         <View
  //           style={{
  //             backgroundColor: 'rgba(74, 177, 146, 0.2)',
  //             borderRadius: 33,
  //             width: 36,
  //             height: 36,
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //             marginRight: SIZES.padding * 1.5,
  //           }}>
  //           <Image
  //             source={icons.Comments}
  //             resizeMode="contain"
  //             style={{
  //               width: 20,
  //               height: 20,
  //               tintColor: '#4AB192',
  //             }}
  //           />
  //         </View>
  //         <View
  //           style={{
  //             marginTop: SIZES.padding * 0.5,
  //           }}>
  //           <Text
  //             style={{
  //               ...FONTS.body3,
  //               color: COLORS.white,
  //             }}>
  //             Chat With Us
  //           </Text>
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           backgroundColor: '#0B415B',
  //           borderRadius: 5,
  //           width: 34,
  //           height: 34,
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>
  //         <Image
  //           source={icons.ChevronRight}
  //           resizeMode="contain"
  //           style={{
  //             width: 20,
  //             height: 20,
  //           }}
  //         />
  //       </View>
  //     </TouchableOpacity>

  //     <TouchableOpacity
  //       style={{
  //         flexDirection: 'row',
  //         justifyContent: 'space-between',
  //         marginVertical: SIZES.padding * 1,
  //       }}>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           justifyContent: 'flex-start',
  //         }}>
  //         <View
  //           style={{
  //             backgroundColor: 'rgba(218, 42, 73, 0.2)',
  //             borderRadius: 33,
  //             width: 36,
  //             height: 36,
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //             marginRight: SIZES.padding * 1.5,
  //           }}>
  //           <Image
  //             source={icons.email}
  //             resizeMode="contain"
  //             style={{
  //               width: 20,
  //               height: 20,
  //               tintColor: '#DA2A49',
  //             }}
  //           />
  //         </View>
  //         <View
  //           style={{
  //             marginTop: SIZES.padding * 0.5,
  //           }}>
  //           <Text
  //             style={{
  //               ...FONTS.body3,
  //               color: COLORS.white,
  //             }}>
  //             Send an Email
  //           </Text>
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           backgroundColor: '#0B415B',
  //           borderRadius: 5,
  //           width: 34,
  //           height: 34,
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>
  //         <Image
  //           source={icons.ChevronRight}
  //           resizeMode="contain"
  //           style={{
  //             width: 20,
  //             height: 20,
  //           }}
  //         />
  //       </View>
  //     </TouchableOpacity>
  //   </View>
  // );

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
        <ScrollView style={{flex: 1}}>{renderNavLinks}</ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default GetHelp;
