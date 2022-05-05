import React, {useState} from 'react';
import {
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, COLORS, SIZES, icons, images} from '../../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {CustomHeader} from '../../../../components/common';
import {styleBankDashboard, styleGeneral} from '../../../../assets/css';

const CardGrid = ({navigation}) => {
  const [cardModalVisbile, setCardModalVisible] = useState(false);

  const renderHeader = (
    <TouchableOpacity
      style={styleGeneral.generalHeaderContainer}
      onPress={() => navigation.navigate('BankDashboard')}>
      <View style={styleGeneral.generalHeaderImgHolder}>
        <Image
          source={icons.chevronLeft}
          resizeMode="contain"
          style={styleGeneral.generalHeaderImg}
        />
      </View>
    </TouchableOpacity>
  );

  
  const renderCardModal = (
    <Modal animationType="slide" transparent={true} visible={cardModalVisbile}>
      <TouchableWithoutFeedback>
        <LinearGradient
          colors={['#81adc2', '#09354A']}
          start={{x: 0.5, y: 0.5}}
          locations={[0.27, 1.0]}
          style={styleBankDashboard.cardOperationModalContainer}>
          <View style={styleBankDashboard.cardOperationModalChildWrapper}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  'CardOperations',
                  {
                    typeUrl: 'Pin',
                  },
                  setCardModalVisible(false),
                )
              }
              style={styleBankDashboard.cardOperationModalChild}>
              <Text style={styleBankDashboard.cardOperationModalChildText}>
                Retrieve Card Pin
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  'CardOperations',
                  {
                    typeUrl: 'Replace',
                  },
                  setCardModalVisible(false),
                )
              }
              style={styleBankDashboard.cardOperationModalChild}>
              <Text style={styleBankDashboard.cardOperationModalChildText}>
                Replace Card
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  'CardOperations',
                  {
                    typeUrl: 'Block',
                  },
                  setCardModalVisible(false),
                )
              }
              style={styleBankDashboard.cardOperationModalChild}>
              <Text style={styleBankDashboard.cardOperationModalChildText}>
                Block Card
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setCardModalVisible(false);
              }}
              style={styleGeneral.modalFooterWrapper}>
              <Image
                source={icons.ArrowDown}
                resizeMode="contain"
                style={styleGeneral.modalFooterWrapperIcon}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </Modal>
  );

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
        <ScrollView style={{flex: 1}}>
          <CustomHeader type="primary" title="Cards" subtitle="" />
          <View style={styleBankDashboard.cardGridContainer}>
            <TouchableOpacity
              onPress={() => setCardModalVisible(true)}
              style={styleBankDashboard.cardGridChildWrapper}>
              <View style={styleBankDashboard.cardGridLTRWrapper}>
                <View>
                  <Image
                    source={icons.CreditCardIcon}
                    style={styleBankDashboard.cardGridLTRIcon}
                  />
                </View>
                <View style={styleBankDashboard.cardGridLTRText}>
                  <Text style={styleBankDashboard.cardGridLTRHeader}>
                    First Bank
                  </Text>
                  <Text style={styleBankDashboard.cardGridChildParagraph}>
                    1234 5678 9101 1121
                  </Text>
                </View>
              </View>
              <View style={styleBankDashboard.cardGridRTLWrapper}>
                <Text style={styleBankDashboard.cardGridRTLText}>Verve</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCardModalVisible(true)}
              style={styleBankDashboard.cardGridChildWrapper}>
              <View style={styleBankDashboard.cardGridLTRWrapper}>
                <View>
                  <Image
                    source={icons.CreditCardIcon}
                    style={styleBankDashboard.cardGridLTRIcon}
                  />
                </View>
                <View style={styleBankDashboard.cardGridLTRText}>
                  <Text style={styleBankDashboard.cardGridLTRHeader}>
                    Access Bank
                  </Text>
                  <Text style={styleBankDashboard.cardGridChildParagraph}>
                    1234 5678 9101 1121
                  </Text>
                </View>
              </View>
              <View style={styleBankDashboard.cardGridRTLWrapper}>
                <Text style={styleBankDashboard.cardGridRTLText}>Verve</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCardModalVisible(true)}
              style={styleBankDashboard.cardGridChildWrapper}>
              <View style={styleBankDashboard.cardGridLTRWrapper}>
                <View>
                  <Image
                    source={icons.CreditCardIcon}
                    style={styleBankDashboard.cardGridLTRIcon}
                  />
                </View>
                <View style={styleBankDashboard.cardGridLTRText}>
                  <Text style={styleBankDashboard.cardGridLTRHeader}>
                    Access Bank
                  </Text>
                  <Text style={styleBankDashboard.cardGridChildParagraph}>
                    1234 5678 9101 1121
                  </Text>
                </View>
              </View>
              <View style={styleBankDashboard.cardGridRTLWrapper}>
                <Text style={styleBankDashboard.cardGridRTLText}>Verve</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {renderCardModal}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CardGrid;
