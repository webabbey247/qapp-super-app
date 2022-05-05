import React, {Fragment} from 'react';
import {
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons} from '../constants';

const TransactionTable = ({navigation}) => {
  return (
    <Fragment>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingHorizontal: SIZES.padding * 1.5,
          paddingVertical:
            Platform.OS === 'ios' ? SIZES.padding * 1 : SIZES.padding * 0.2,
        }}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.white,
          }}>
          Transaction History
        </Text>
        <View style={{marginTop: SIZES.padding * 1.5}}>
          <TextInput
            style={{
              backgroundColor: 'rgba(94,170,168, 0.1)',
              paddingHorizontal: SIZES.padding * 2,
              height: 45,
              color: COLORS.grayColor,
              borderRadius: 30,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#D3F3FF',
              ...FONTS.body3,
            }}
            placeholder="Search"
            placeholderTextColor={COLORS.breakerBay}
            selectionColor={COLORS.textBlue}
            returnKeyType="done"
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 5,
              bottom: 0,
              width: 30,
              height: 30,
            }}
            onPress={() => console.log('Search is active')}>
            <Image
              source={icons.Search}
              style={{
                width: 15,
                height: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          paddingVertical:
            Platform.OS === 'ios' ? SIZES.padding * 1 : SIZES.padding * 0.5,
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginVertical: SIZES.padding * 1,
          }}>
          {/* First Row */}
          <View
            style={{
              flexDirection: 'column',
              paddingBottom: SIZES.padding * 1.5,
            }}>
            <View
              style={{
                backgroundColor: COLORS.tangaroa,
                width: '100%',
              }}>
              <Text
                style={{
                  paddingVertical:
                    Platform.OS === 'ios' ? SIZES.padding * 0.6 : SIZES.padding,
                  paddingHorizontal: SIZES.padding * 2,
                  color: COLORS.grayColor,
                  ...FONTS.body4,
                }}>
                Today
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('BankFIScreen', {
                  screen: 'TransactionInfo',
                })
              }
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 1.3,
                borderWidth: 0.25,
                borderBottomColor: COLORS.grayColor,
                borderTopColor: COLORS.transparent,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: SIZES.padding * 1,
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: COLORS.darkCyan,
                    borderRadius: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icons.TransactionIcon}
                    style={{
                      width: 15,
                      height: 15,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.grayColor,
                    }}>
                    FRANK OBIADI
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body6,
                      color: COLORS.breakerBay,
                    }}>
                    9:00PM
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.caribbeanGreen,
                  }}>
                  5,000.00
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Second Row */}
          <View
            style={{
              flexDirection: 'column',
              paddingBottom: SIZES.padding * 1.5,
            }}>
            <View
              style={{
                backgroundColor: COLORS.tangaroa,
                width: '100%',
              }}>
              <Text
                style={{
                  paddingVertical:
                    Platform.OS === 'ios' ? SIZES.padding * 0.6 : SIZES.padding,
                  paddingHorizontal: SIZES.padding * 2,
                  color: COLORS.grayColor,
                  ...FONTS.body4,
                }}>
                14 March 2022
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 1.3,
                borderWidth: 0.25,
                borderBottomColor: COLORS.grayColor,
                borderTopColor: COLORS.transparent,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: SIZES.padding * 1,
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: COLORS.darkCyan,
                    borderRadius: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icons.TransactionIcon}
                    style={{
                      width: 15,
                      height: 15,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.grayColor,
                    }}>
                    YEMI SALEM
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body6,
                      color: COLORS.breakerBay,
                    }}>
                    9:00PM
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.caribbeanGreen,
                  }}>
                  2,000.00
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 1.3,
                borderWidth: 0.25,
                borderBottomColor: COLORS.grayColor,
                borderTopColor: COLORS.transparent,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: SIZES.padding * 1,
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: COLORS.darkCyan,
                    borderRadius: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icons.AirtimeIcon}
                    style={{
                      width: 9,
                      height: 13,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.grayColor,
                    }}>
                    MTN 07031306196
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body6,
                      color: COLORS.breakerBay,
                    }}>
                    9:00PM
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.grayColor,
                  }}>
                  3,500.00
                </Text>
              </View>
            </View>
          </View>
          {/* Third Row */}

          <View
            style={{
              flexDirection: 'column',
              paddingBottom: SIZES.padding * 1.5,
            }}>
            <View
              style={{
                backgroundColor: COLORS.tangaroa,
                width: '100%',
              }}>
              <Text
                style={{
                  paddingVertical:
                    Platform.OS === 'ios' ? SIZES.padding * 0.6 : SIZES.padding,
                  paddingHorizontal: SIZES.padding * 2,
                  color: COLORS.grayColor,
                  ...FONTS.body4,
                }}>
                11 March 2022
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 1.3,
                borderWidth: 0.25,
                borderBottomColor: COLORS.grayColor,
                borderTopColor: COLORS.transparent,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: SIZES.padding * 1,
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: COLORS.darkCyan,
                    borderRadius: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icons.AirtimeIcon}
                    style={{
                      width: 9,
                      height: 13,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.grayColor,
                    }}>
                    MTN 07031306196
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body6,
                      color: COLORS.breakerBay,
                    }}>
                    9:00PM
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.grayColor,
                  }}>
                  3,500.00
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 1.3,
                borderWidth: 0.25,
                borderBottomColor: COLORS.grayColor,
                borderTopColor: COLORS.transparent,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: SIZES.padding * 1,
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: COLORS.darkCyan,
                    borderRadius: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icons.AirtimeIcon}
                    style={{
                      width: 9,
                      height: 13,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.grayColor,
                    }}>
                    MTN 07031306196
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body6,
                      color: COLORS.breakerBay,
                    }}>
                    9:00PM
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.grayColor,
                  }}>
                  3,500.00
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 1.3,
                borderWidth: 0.25,
                borderBottomColor: COLORS.grayColor,
                borderTopColor: COLORS.transparent,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: SIZES.padding * 1,
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: COLORS.darkCyan,
                    borderRadius: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icons.AirtimeIcon}
                    style={{
                      width: 9,
                      height: 13,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.grayColor,
                    }}>
                    MTN 07031306196
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body6,
                      color: COLORS.breakerBay,
                    }}>
                    9:00PM
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.grayColor,
                  }}>
                  3,500.00
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 1.3,
                borderWidth: 0.25,
                borderBottomColor: COLORS.grayColor,
                borderTopColor: COLORS.transparent,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: SIZES.padding * 1,
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: COLORS.darkCyan,
                    borderRadius: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icons.AirtimeIcon}
                    style={{
                      width: 9,
                      height: 13,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.grayColor,
                    }}>
                    MTN 07031306196
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body6,
                      color: COLORS.breakerBay,
                    }}>
                    9:00PM
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.grayColor,
                  }}>
                  3,500.00
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 1.3,
                borderWidth: 0.25,
                borderBottomColor: COLORS.grayColor,
                borderTopColor: COLORS.transparent,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: SIZES.padding * 1,
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: COLORS.darkCyan,
                    borderRadius: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icons.AirtimeIcon}
                    style={{
                      width: 9,
                      height: 13,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.grayColor,
                    }}>
                    MTN 07031306196
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body6,
                      color: COLORS.breakerBay,
                    }}>
                    9:00PM
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.grayColor,
                  }}>
                  3,500.00
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 1.3,
                borderWidth: 0.25,
                borderBottomColor: COLORS.grayColor,
                borderTopColor: COLORS.transparent,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: SIZES.padding * 1,
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: COLORS.darkCyan,
                    borderRadius: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icons.AirtimeIcon}
                    style={{
                      width: 9,
                      height: 13,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.grayColor,
                    }}>
                    MTN 07031306196
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body6,
                      color: COLORS.breakerBay,
                    }}>
                    9:00PM
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.grayColor,
                  }}>
                  3,500.00
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 1.3,
                borderWidth: 0.25,
                borderBottomColor: COLORS.grayColor,
                borderTopColor: COLORS.transparent,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: SIZES.padding * 1,
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: COLORS.darkCyan,
                    borderRadius: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icons.AirtimeIcon}
                    style={{
                      width: 9,
                      height: 13,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.grayColor,
                    }}>
                    MTN 07031306196
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body6,
                      color: COLORS.breakerBay,
                    }}>
                    9:00PM
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.grayColor,
                  }}>
                  3,500.00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default TransactionTable;
