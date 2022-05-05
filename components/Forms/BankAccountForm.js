import React, {Fragment, useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FONTS, COLORS, SIZES, icons} from '../../constants';
import {
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
} from '../../assets/css';

const BankAccountForm = () => {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [modalVisbile, setModalVisible] = useState(false);
  const [bankData, setBankData] = useState('');
  const [showIndicator, setShowIndicator] = useState(true);
  const [bank, setBank] = useState('');

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
          // source={images.CCIcon}
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
      <View style={styleFormComponents.formWrapper}>
        {/* Select Bank */}
        <View style={{marginTop: SIZES.padding * 1}}>
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

        {/* Account Number */}
        <View style={{marginTop: SIZES.padding * 1.5}}>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Account Number"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />
        </View>

        {/* Password */}
        <View style={{marginTop: SIZES.padding * 1.5}}>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Password"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
            secureTextEntry={!showPassword}
            returnKeyType="done"
          />

          <TouchableOpacity
            style={styleFormComponents.defaultTextInputIconHolder}
            onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.disabled_eyes : icons.eyes}
              style={styleFormComponents.defaultTextInputIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styleAuthScreen.authButtonWrapper,
          {marginVertical: SIZES.padding * 3},
        ]}>
        <TouchableOpacity
          style={styleButtons.defaultButton}
          onPress={() =>
            navigation.navigate('OTPAuth', {typeUrl: 'BankLogin'})
          }>
          <Text style={styleButtons.defaultButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {renderBankModal}
    </Fragment>
  );
};

export default BankAccountForm;
