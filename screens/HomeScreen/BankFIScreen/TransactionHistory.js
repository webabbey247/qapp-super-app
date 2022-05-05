import React, {Fragment} from 'react';
import {
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, COLORS, SIZES, icons, images} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';

const TransactionHistory = () => {
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
            screen: 'BankDashboard',
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
        {/* <View
          style={{
            width: 50,
            height: 50,
            marginTop: SIZES.padding * 1,
            marginLeft: SIZES.padding * 12,
          }}>
          <Image
            source={images.dummyUserBank}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View> */}
      </TouchableOpacity>
    );
  }

  function renderSearchForm() {
    return (
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
              height: 50,
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
    );
  }

  function renderAccountSummary() {
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: SIZES.padding * 1,
          paddingVertical:
            Platform.OS === 'ios' ? SIZES.padding * 1 : SIZES.padding * 0.2,
        }}>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.grayColor,
            marginVertical: SIZES.padding * 0.5,
          }}>
          First Bank Balance
        </Text>
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.white,
            marginVertical: SIZES.padding * 0.7,
          }}>
          N75,000.00
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.monteCarlo,
          }}>
          Spent Today{' '}
          <Text
            style={{
              color: COLORS.grayColor,
            }}>
            N500.00
          </Text>
        </Text>
      </View>
    );
  }

  function renderOperations() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding * 2,
          marginVertical: SIZES.padding * 1,
          paddingVertical:
            Platform.OS === 'ios' ? SIZES.padding * 1.2 : SIZES.padding * 0.2,
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.darkCyan,
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.DepositIcon}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.grayColor,
              marginVertical: SIZES.padding * 0.9,
            }}>
            Deposit
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.darkCyan,
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.WithdrawIcon}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.grayColor,
              marginVertical: SIZES.padding * 0.9,
            }}>
            Withdraw
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.darkCyan,
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.SendIcon}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.grayColor,
              marginVertical: SIZES.padding * 0.9,
            }}>
            Transfer
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.darkCyan,
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.CreditCardIcon}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.grayColor,
              marginVertical: SIZES.padding * 0.9,
            }}>
            Card
          </Text>
        </View>
      </View>
    );
  }

  function renderTransactionTable() {
    return (
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
            </View>
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
        {renderSearchForm()}
        {/* {renderAccountSummary()} */}
        {/* {renderOperations()} */}
        <ScrollView style={{flex: 1}}>
          {renderTransactionTable()}
          {/* {renderTodayExpenses()} */}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default TransactionHistory;
