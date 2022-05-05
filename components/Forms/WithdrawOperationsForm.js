import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLORS, SIZES} from '../../constants';

import {
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
  styleTransactionSummary,
  styleFooter,
} from '../../assets/css';

const WithdrawOperationsForm = () => {
  const [deposit, setDeposit] = useState(false);

  const renderFooter = (
    <TouchableWithoutFeedback
      style={styleTransactionSummary.TransactionSummaryFooter}
      onPress={() => navigation.navigate('Login')}>
      <Text style={styleFooter.footerText}>
        Issues with transaction?
        <Text style={styleFooter.footerTextBlueText}> {''} Report!</Text>
      </Text>
    </TouchableWithoutFeedback>
  );

  return (
    <Fragment>
      {!deposit ? (
        <View
          style={{
            paddingTop: SIZES.padding * 6,
          }}>
          <View style={styleFormComponents.formWrapper}>
            {/* Amount */}
            <View style={{marginTop: SIZES.padding * 6}}>
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
          </View>
          <View
            style={[
              styleAuthScreen.authButtonWrapper,
              {marginVertical: SIZES.padding * 3},
            ]}>
            <TouchableOpacity
              style={styleButtons.defaultButton}
              onPress={() => setDeposit(true)}>
              <Text style={styleButtons.defaultButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Fragment>
          <View style={styleTransactionSummary.TransactionSummaryContainer}>
            <View
              style={styleTransactionSummary.TransactionSummaryHeaderWrapper}>
              <Text style={styleTransactionSummary.TransactionSummaryHeader}>
                Withdrawal Initiated
              </Text>
              <Text style={styleTransactionSummary.TransactionSummaryParagraph}>
                Proceed to your bank to make and complete deposit
              </Text>
            </View>

            <View style={styleTransactionSummary.TransactionTokenWrapper}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text
                  style={styleTransactionSummary.TransactionTokenTopParagraph}>
                  Token
                </Text>
                <Text style={styleTransactionSummary.TransactionTokenTopHeader}>
                  234758
                </Text>
              </View>
              <View>
                <Text
                  style={
                    styleTransactionSummary.TransactionTokenBottomTextHeader
                  }>
                  Transaction ID
                </Text>
                <Text
                  style={styleTransactionSummary.TransactionTokenBottomText}>
                  012749027493030375885
                </Text>
              </View>
            </View>
          </View>
          <View style={styleTransactionSummary.TransactionButtonWrapper}>
            <TouchableOpacity
              style={styleButtons.textBlueButton}
              onPress={() => console.log('Share transcript')}>
              <Text style={styleButtons.textBlueButtonText}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styleButtons.textBlueDualButton}
              onPress={() => console.log('Download transcript')}>
              <Text style={styleButtons.textBlueButtonText}>Download</Text>
            </TouchableOpacity>
          </View>
          {renderFooter}
        </Fragment>
      )}
    </Fragment>
  );
};

export default WithdrawOperationsForm;
