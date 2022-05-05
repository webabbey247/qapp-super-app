import React, {useState} from 'react';
import {
  TouchableOpacity,
  StatusBar,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, icons, images} from '../../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import ToggleSwitch from 'toggle-switch-react-native';
import {styleGeneral, styleSettingsScreen} from '../../../../assets/css';

const Settings = ({navigation}) => {
  const [isOn, setIsOn] = useState(false);

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

  const renderProfileInfo = (
    <View style={styleSettingsScreen.profileContainer}>
      <View style={styleSettingsScreen.profileTopTextWrapper}>
        <Text style={styleSettingsScreen.profileTopTextHeader}>
          Personal Information
        </Text>
      </View>

      <View style={styleSettingsScreen.profileBottomWrapper}>
        <View style={styleSettingsScreen.profileBottomImgHolder}>
          <Image
            source={images.dummyUserIcon}
            style={styleSettingsScreen.profileBottomImg}
          />
        </View>

        <View style={styleSettingsScreen.profileBottomTextHolder}>
          <Text style={styleSettingsScreen.profileBottomTextFullName}>
            Charles Ellem
          </Text>
          <Text style={styleSettingsScreen.profileBottomTextEmailAddress}>
            ellemkuti@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );

  const renderNavLinks = (
    <View style={styleSettingsScreen.profileNavContainer}>
      <View style={styleSettingsScreen.profileNavHeaderTextWrapper}>
        <Text style={styleSettingsScreen.profileNavHeaderText}>
          Account Settings
        </Text>
      </View>

      <TouchableOpacity style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavFirstChildBg,
            ]}>
            <Image
              source={icons.LockIcon}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavFirstChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>
              Change Password
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

      <TouchableOpacity
        onPress={() => navigation.navigate('ChangePin')}
        style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavSecondChildBg,
            ]}>
            <Image
              source={icons.Paperclip}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavSecondChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>
              Change Transaction PIN
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

      <TouchableOpacity
        onPress={() => navigation.navigate('ChangeQA')}
        style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavThirdChildBg,
            ]}>
            <Image
              source={icons.Pen}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavThirdChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>
              Change Question & Answer
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

      <View style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavFourthChildBg,
            ]}>
            <Image
              source={icons.FingerPrint}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavFourthChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>
              Biometric
            </Text>
          </View>
        </View>
        <View style={styleSettingsScreen.profileNavToggleWrapper}>
          <ToggleSwitch
            thumbOnStyle={{backgroundColor: '#177683'}}
            thumbOffStyle={{backgroundColor: COLORS.deepBlue}}
            isOn={isOn ? true : false}
            onColor="#032130"
            offColor="#177683"
            size="default"
            onToggle={() => setIsOn(!isOn)}
          />
        </View>
      </View>

      <View style={styleSettingsScreen.profileNavHeaderTextWrapper}>
        <Text style={styleSettingsScreen.profileNavHeaderText}>
          Personalization
        </Text>
      </View>

      <TouchableOpacity style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavFifthChildBg,
            ]}>
            <Image
              source={icons.Paperclip}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavFifthChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>
              Privacy Policy
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

      <View style={styleSettingsScreen.profileNavHeaderTextWrapper}>
        <Text style={styleSettingsScreen.profileNavHeaderText}>Legal</Text>
      </View>

      <TouchableOpacity style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavSixthChildBg,
            ]}>
            <Image
              source={icons.FileIcon}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavSixthChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>
              Terms & Conditions
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

      <View style={styleSettingsScreen.profileNavHeaderTextWrapper}>
        <Text style={styleSettingsScreen.profileNavHeaderText}>Support</Text>
      </View>

      <TouchableOpacity style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavSeventhChildBg,
            ]}>
            <Image
              source={icons.CommentDots}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavSeventhChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>FAQ</Text>
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

      <TouchableOpacity
        onPress={() => navigation.navigate('GetHelp')}
        style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavEigthChildBg,
            ]}>
            <Image
              source={icons.InfoIcon}
              resizeMode="contain"
              style={[
                styleSettingsScreen.profileNavChildLTRIcon,
                styleSettingsScreen.profileNavEigthChildTintColor,
              ]}
            />
          </View>
          <View style={styleSettingsScreen.profileNavChildLTRTextHolder}>
            <Text style={styleSettingsScreen.profileNavChildLTRText}>
              Get Help
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

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AuthScreen', {
            screen: 'Login',
          })
        }
        style={styleSettingsScreen.profileAuthLogoutWrapper}>
        <Text style={styleSettingsScreen.profileAuthLogoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
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
        {renderProfileInfo}

        <ScrollView style={{flex: 1}}>{renderNavLinks}</ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Settings;
