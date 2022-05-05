import React, {Fragment} from 'react';
import {
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, COLORS, SIZES, icons, images} from '../../../../constants';
import LinearGradient from 'react-native-linear-gradient';

const TransactionInfo = ({navigation}) => {
  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingHorizontal: SIZES.padding * 1,
          paddingVertical:
            Platform.OS === 'ios' ? SIZES.padding * 1 : SIZES.padding * 0.2,
        }}
        onPress={() =>
          navigation.navigate('BankFIScreen', {
            screen: 'Transaction',
          })
        }>
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
  }

  function renderInfo() {
    return (
      <View
        style={{
          flexDirection: 'column',
          //   paddingHorizontal: SIZES.padding * 1,
          paddingVertical:
            Platform.OS === 'ios' ? SIZES.padding * 1 : SIZES.padding * 0.2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.padding * 2.3,
            marginVertical: SIZES.padding * 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 34,
                height: 34,
                backgroundColor: COLORS.darkCyan,
                borderRadius: 100,
                marginRight: 12,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.DepositIcon}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </View>
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.grayColor,
                marginVertical: SIZES.padding * 0.9,
              }}>
              Deposit
            </Text>
          </View>
          <Text
            style={{
              ...FONTS.body5,
              color: COLORS.grayColor,
              marginTop: SIZES.padding * 1,
            }}>
            On Mar 19 at 14.46 PM
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            marginVertical: SIZES.padding * 1,
            borderWidth: 0.25,
            borderBottomColor: COLORS.grayColor,
            borderTopColor: COLORS.transparent,
            borderRightColor: COLORS.transparent,
            borderLeftColor: COLORS.transparent,
          }}>
          <View
            style={{
              paddingHorizontal: SIZES.padding * 2.3,
              marginBottom: SIZES.padding * 2,
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white,
                marginBottom: SIZES.padding * 1,
              }}>
              N5,000.00
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.grayColor,
              }}>
              FRANK OBIADI
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            marginVertical: SIZES.padding * 1,
            borderWidth: 0.25,
            borderBottomColor: COLORS.grayColor,
            borderTopColor: COLORS.transparent,
            borderRightColor: COLORS.transparent,
            borderLeftColor: COLORS.transparent,
          }}>
          <View
            style={{
              paddingHorizontal: SIZES.padding * 2.3,
              marginBottom: SIZES.padding * 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginVertical: SIZES.padding * 0.5,
              }}>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.breakerBay,
                  marginBottom: SIZES.padding * 1,
                }}>
                To
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.grayColor,
                }}>
                FRANK OBIADI
              </Text>
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                marginLeft: SIZES.padding * 12,
              }}>
              <Image
                source={images.dummyUserBank2}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            marginVertical: SIZES.padding * 1,
            borderWidth: 0.25,
            borderBottomColor: COLORS.grayColor,
            borderTopColor: COLORS.transparent,
            borderRightColor: COLORS.transparent,
            borderLeftColor: COLORS.transparent,
          }}>
          <View
            style={{
              paddingHorizontal: SIZES.padding * 2.3,
              marginBottom: SIZES.padding * 2,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.breakerBay,
                marginBottom: SIZES.padding * 1,
              }}>
              Transaction Description
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.grayColor,
              }}>
              Groceries
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            marginVertical: SIZES.padding * 1,
            borderWidth: 0.25,
            borderBottomColor: COLORS.grayColor,
            borderTopColor: COLORS.transparent,
            borderRightColor: COLORS.transparent,
            borderLeftColor: COLORS.transparent,
          }}>
          <View
            style={{
              paddingHorizontal: SIZES.padding * 2.3,
              marginBottom: SIZES.padding * 2,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.breakerBay,
                marginBottom: SIZES.padding * 1,
              }}>
              Transaction ID
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.grayColor,
              }}>
              0352753729930394793837382
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderButtons() {
    return (
      <View
        style={{
          marginVertical: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 2,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 55,
            borderRadius: 10,
            backgroundColor: COLORS.breakerBay,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Share transcript')}>
          <Text
            style={{
              color: COLORS.tangaroa,
              ...FONTS.h4,
            }}>
            Share
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 150,
            marginLeft: SIZES.padding * 2,
            height: 55,
            borderRadius: 10,
            backgroundColor: COLORS.breakerBay,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Download transcript')}>
          <Text
            style={{
              color: COLORS.tangaroa,
              ...FONTS.h4,
            }}>
            Download
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          marginVertical: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 2,
        }}>
        <Text
          style={{
            marginBottom: SIZES.padding * 3,
            color: COLORS.grayColor,
            ...FONTS.body4,
            textAlign: 'center',
          }}>
          Issues with transaction?
          <Text
            style={{
              color: COLORS.breakerBay,
            }}>
            {''} Report
          </Text>
        </Text>
      </View>
    );
  }
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
        {renderHeader()}
        <ScrollView style={{flex: 1}}>
          {renderInfo()}
          {renderButtons()}
          {renderFooter()}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default TransactionInfo;
