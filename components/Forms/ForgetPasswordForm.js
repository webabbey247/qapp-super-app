import React, {Fragment, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import {COLORS, SIZES, icons, FONTS} from '../../constants';

import {
  styleGeneral,
  styleAuthScreen,
  styleFormComponents,
  styleButtons,
} from '../../assets/css';

const ForgetPasswordForm = () => {
  const navigation = useNavigation();
  const [areaCode, setAreaCode] = useState([]);
  const [selectedAreaCode, setSelectedAreaCode] = useState('');
  const [modalVisbile, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(response => response.json())
      .then(data => {
        const areaCodeData = data.map(item => {
          return {
            code: item.cca2,
            name: item.name.common,
            flag: item.flags[1],
            dialCode: [item.idd.root, (item.idd.suffixes || [])[0]].join(''),
          };
        });

        setAreaCode(areaCodeData);
        if (areaCodeData.length > 0) {
          let defaultAreaData = areaCodeData.filter(a => a.code === 'NG');
          if (defaultAreaData.length > 0) {
            setSelectedAreaCode(defaultAreaData[0]);
          }
        }
      })
      .catch(err => {
        console.error('Request failed', err);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{padding: SIZES.padding, flexDirection: 'row'}}
        onPress={() => {
          setSelectedAreaCode(item);
          setModalVisible(false);
        }}>
        <Image
          source={{uri: item.flag}}
          style={{
            width: 30,
            height: 30,
            marginRight: 10,
          }}
        />
        <Text style={{...FONTS.body4, color: COLORS.white}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderAreaCodeModal = (
    <Modal animationType="slide" transparent={true} visible={modalVisbile}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styleGeneral.generalModalContainer}>
          <View style={styleGeneral.generalModal}>
            <FlatList
              data={areaCode}
              renderItem={renderItem}
              keyExtractor={item => item.code}
              showsVerticalScrollIndicator={false}
              style={styleGeneral.generalFlatlistModal}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  return (
    <Fragment>
      <View style={styleFormComponents.formWrapper}>
        {/* Mobile Number */}
        <View style={{marginVertical: SIZES.padding * 1.5}}>
          <View style={styleFormComponents.phoneCodeContainer}>
            {/* Country Code */}
            <TouchableOpacity
              style={styleFormComponents.phoneCodeWrapper}
              onPress={() => setModalVisible(true)}>
              <View style={styleFormComponents.phoneCodeImgHolder}>
                <Image
                  source={{uri: selectedAreaCode.flag}}
                  resizeMode="contain"
                  style={styleFormComponents.phoneCodeImg}
                />
              </View>
              <View style={styleFormComponents.phoneCodeTextHolder}>
                <Text style={styleFormComponents.phoneCodeText}>
                  {selectedAreaCode?.dialCode}
                </Text>
              </View>
              <View style={styleFormComponents.phoneCodeDropDownImgHolder}>
                <Image
                  source={icons.DropDown}
                  style={styleFormComponents.phoneCodeDropDownImg}
                />
              </View>
            </TouchableOpacity>
            <TextInput
              style={styleFormComponents.phoneCodeTextInput}
              placeholder="Phone Number"
              placeholderTextColor={COLORS.textBlue}
              selectionColor={COLORS.textBlue}
              returnKeyType="next"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* Divider */}
        <View>
          <Text style={styleFormComponents.labelDivider}>OR</Text>
        </View>

        {/* Email Address */}
        <View style={{marginVertical: SIZES.padding * 1.5}}>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Email Address"
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
          onPress={() =>
            navigation.navigate('OTPAuth', {typeUrl: 'ResetPassword'})
          }>
          <Text style={styleButtons.defaultButtonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>

      {renderAreaCodeModal}
    </Fragment>
  );
};

export default ForgetPasswordForm;
