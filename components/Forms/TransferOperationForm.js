import React, {Fragment, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons, images} from '../../constants';

import {
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
  styleTransactionSummary,
} from '../../assets/css';

const TransferOperationForm = () => {
  const [transfer, setTransfer] = useState(false);
  const [modalVisbile, setModalVisible] = useState(false);
  const [bankData, setBankData] = useState('');
  const [showIndicator, setShowIndicator] = useState(true);
  const [bank, setBank] = useState('');
  const [toggleAccountOption, setToggleAccountOption] = useState(true);

  useEffect(() => {
    async function fetchData() {
      fetch('https://nigerianbanks.xyz')
        .then(response => response.json())
        .then(responseJson => {
          setBankData(responseJson);
          setShowIndicator(false);
        })
        .catch(error => {
          console.error(error);
        });
    }
    fetchData();
  }, []);

  const divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: COLORS.lightTextBlue,
        }}
      />
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{padding: SIZES.padding, flexDirection: 'row'}}
        onPress={() => {
          setBank(item);
          setModalVisible(false);
        }}>
        <Image
          source={{uri: item.logo}}
          style={{
            width: 25,
            height: 25,
            marginRight: 20,
          }}
        />
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.white,
            paddingVertical: SIZES.padding * 0.4,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderLoginOption = (
    <View style={styleAuthScreen.transferOptionContainer}>
      <View style={styleAuthScreen.loginOptionsWrapper}>
        <TouchableOpacity
          style={[
            styleAuthScreen.loginOptionsTab,
            toggleAccountOption
              ? styleAuthScreen.loginOptionsActiveTab
              : styleAuthScreen.loginOptionsInActiveTab,
          ]}
          onPress={() => {
            setToggleAccountOption(true);
          }}>
          <Text style={styleAuthScreen.loginOptionsTabText}>By Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styleAuthScreen.loginOptionsTab,
            toggleAccountOption
              ? styleAuthScreen.loginOptionsInActiveTab
              : styleAuthScreen.loginOptionsActiveTab,
          ]}
          onPress={() => {
            setToggleAccountOption(false);
          }}>
          <Text style={styleAuthScreen.loginOptionsTabText}>By Phone</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderBankModal = (
    <Modal animationType="slide" transparent={true} visible={modalVisbile}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 400,
              width: SIZES.width * 0.8,
              backgroundColor: COLORS.textBlue,
              borderRadius: SIZES.radius,
            }}>
            <ActivityIndicator
              size="large"
              color={COLORS.textBlue}
              animating={showIndicator}
              style={{
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
            />
            <FlatList
              data={bankData}
              renderItem={renderItem}
              ItemSeparatorComponent={divider}
              keyExtractor={item => item.code}
              showsVerticalScrollIndicator={false}
              style={{
                padding: SIZES.padding * 2,
                marginBottom: SIZES.padding * 2,
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  return (
    <Fragment>
      {!transfer ? (
        <View
          style={{
            paddingTop: SIZES.padding * 1,
          }}>
          <View style={styleFormComponents.formWrapper}>
            {/* input */}
            <View style={{marginTop: SIZES.padding * 1}}>
              <Text style={styleFormComponents.formCenterLabel}>
                Balance: N75,000.54
              </Text>
              <TextInput
                style={styleFormComponents.defaultTextInput}
                placeholder="Amount"
                placeholderTextColor={COLORS.textBlue}
                selectionColor={COLORS.textBlue}
              />
            </View>

            {renderLoginOption}

            {toggleAccountOption ? (
              <Fragment>
                {/* input */}
                <View style={{marginTop: SIZES.padding * 1}}>
                  <Text style={styleFormComponents.formLabel}>Account</Text>
                  <TextInput
                    style={styleFormComponents.defaultTextInput}
                    placeholder="Account Number"
                    placeholderTextColor={COLORS.textBlue}
                    selectionColor={COLORS.textBlue}
                    returnKeyType="next"
                    keyboardType="phone-pad"
                    maxLength={10}
                  />
                </View>

                {/* input */}
                <View style={{marginTop: SIZES.padding * 1}}>
                  <Text style={styleFormComponents.formLabel}>
                    Account Name
                  </Text>
                  <TextInput
                    style={styleFormComponents.defaultTextInput}
                    placeholder="ELEM CHARLES KUTI"
                    placeholderTextColor={COLORS.textBlue}
                    selectionColor={COLORS.textBlue}
                    editable={false}
                  />
                </View>
              </Fragment>
            ) : (
              <Fragment>
                {/* input */}
                <View style={{marginTop: SIZES.padding * 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styleFormComponents.formLabel}>
                      Phone Number
                    </Text>
                    <Text style={styleFormComponents.formLabel}>
                      Choose from Contact
                    </Text>
                  </View>
                  <TextInput
                    style={styleFormComponents.defaultTextInput}
                    placeholder="Phone Number"
                    placeholderTextColor={COLORS.textBlue}
                    selectionColor={COLORS.textBlue}
                    keyboardType="phone-pad"
                    maxLength={10}
                  />
                </View>
              </Fragment>
            )}

            {/* Select Bank */}
            <View style={{marginTop: SIZES.padding * 1}}>
              <Text style={styleFormComponents.formLabel}>Bank</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styleFormComponents.defaultTextInput}>
                <Text
                  style={{
                    color: COLORS.textBlue,
                    marginTop: SIZES.padding * 1.5,
                  }}>
                  {bank ? bank.name : 'Select Bank'}
                </Text>
                <View style={styleFormComponents.defaultTextInputIconHolder}>
                  <Image
                    source={icons.chevronCircleDown}
                    style={styleFormComponents.defaultTextInputIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>

            {/* Comment */}
            <View style={{marginTop: SIZES.padding * 1}}>
              <Text style={styleFormComponents.formLabel}>Comment</Text>
              <TextInput
                style={styleFormComponents.defaultTextInput}
                placeholder="Description"
                placeholderTextColor={COLORS.textBlue}
                selectionColor={COLORS.textBlue}
                returnKeyType="done"
              />
            </View>
          </View>
          <View
            style={[
              styleAuthScreen.authButtonWrapper,
              {marginVertical: SIZES.padding * 3},
            ]}>
            <TouchableOpacity
              style={styleButtons.defaultButton}
              onPress={() => setTransfer(true)}>
              <Text style={styleButtons.defaultButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Fragment>
          <View style={styleTransactionSummary.TransactionSummaryContainer}>
            <View
              style={styleTransactionSummary.TransactionSummaryHeaderWrapper}>
              <Text style={styleTransactionSummary.TransactionSummaryAltHeader}>
                Sending to
              </Text>
              <Text
                style={styleTransactionSummary.TransactionSummaryAltParagraph}>
                Frank Obiadi
              </Text>
            </View>

            <View style={styleTransactionSummary.TransactionAmountWrapper}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text
                  style={styleTransactionSummary.TransactionAmountTopParagraph}>
                  Amount
                </Text>
                <Text
                  style={styleTransactionSummary.TransactionAmountTopHeader}>
                  N5,000
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginVertical: SIZES.padding * 1.5,
                }}>
                <Text
                  style={styleTransactionSummary.TransactionSummaryAltHeader}>
                  Beneficiary Bank
                </Text>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.dummyUserBank2}
                    style={{
                      width: 40,
                      height: 40,
                      marginVertical: SIZES.padding * 1,
                    }}
                  />
                  <Text
                    style={styleTransactionSummary.TransactionSummaryAltHeader}>
                    First Bank of Nigeria
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={
                    styleTransactionSummary.TransactionAmountBottomTextHeader
                  }>
                  Description:
                </Text>
                <Text
                  style={styleTransactionSummary.TransactionAmountBottomText}>
                  Food and Groceries
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
              }}>
              <View style={styleFormComponents.inlineTransferOTPWrapper}>
                <TextInput
                  style={styleFormComponents.inlinePinTextInput}
                  maxLength={1}
                  returnKeyType="next"
                  keyboardType="phone-pad"
                  selectionColor={COLORS.textBlue}
                />

                <TextInput
                  style={styleFormComponents.inlinePinTextInput}
                  maxLength={1}
                  returnKeyType="next"
                  keyboardType="phone-pad"
                  selectionColor={COLORS.textBlue}
                />

                <TextInput
                  style={styleFormComponents.inlinePinTextInput}
                  maxLength={1}
                  returnKeyType="next"
                  keyboardType="phone-pad"
                  selectionColor={COLORS.textBlue}
                />

                <TextInput
                  style={styleFormComponents.inlinePinTextInput}
                  maxLength={1}
                  returnKeyType="next"
                  keyboardType="phone-pad"
                  selectionColor={COLORS.textBlue}
                />
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginVertical: SIZES.padding * 2,
                    color: COLORS.white,
                    ...FONTS.body3,
                  }}>
                  Tap to enter your Transaction PIN
                </Text>
              </View>
            </View>

            <View
              style={{
                marginTop: SIZES.padding * 2.5,
                backgroundColor: '#052D40',
                width: SIZES.width * 0.5,
                height: SIZES.height * 0.1,
                borderRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: SIZES.padding * 1.3,
                }}>
                <TouchableOpacity>
                  <Image
                    source={icons.faceIDIcon}
                    style={{
                      width: 38,
                      height: 38,
                      marginVertical: SIZES.padding * 1,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={icons.fingerPrintIcon}
                    style={{
                      width: 38,
                      height: 38,
                      marginVertical: SIZES.padding * 1,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Fragment>
      )}
      {renderBankModal}
    </Fragment>
  );
};

export default TransferOperationForm;
