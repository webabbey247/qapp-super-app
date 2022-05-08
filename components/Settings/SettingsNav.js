import React,{useState} from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, icons } from "../../constants";
import ToggleSwitch from "toggle-switch-react-native";
import { styleSettingsScreen } from "../../assets/css";

export default SettingsNav = ({setActiveGetHelp}) => {
    const [isOn, setIsOn] = useState(false);
    const navigation = useNavigation();

  return (
    <View style={styleSettingsScreen.profileNavContainer}>
      <View style={styleSettingsScreen.profileNavHeaderTextWrapper}>
        <Text style={styleSettingsScreen.profileNavHeaderText}>
          Account Settings
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styleSettingsScreen.profileNavChildWrapper}
      >
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavSecondChildBg,
            ]}
          >
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
              Update Profile
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

      <TouchableOpacity onPress={() => navigation.navigate("UpdatePassword")} style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavFirstChildBg,
            ]}
          >
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

      <View style={styleSettingsScreen.profileNavChildWrapper}>
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavFourthChildBg,
            ]}
          >
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
            thumbOnStyle={{ backgroundColor: "#177683" }}
            thumbOffStyle={{ backgroundColor: COLORS.deepBlue }}
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
            ]}
          >
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
            ]}
          >
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
            ]}
          >
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
        onPress={() => setActiveGetHelp(true)}
        style={styleSettingsScreen.profileNavChildWrapper}
      >
        <View style={styleSettingsScreen.profileNavChildLTR}>
          <View
            style={[
              styleSettingsScreen.profileNavChildLTRIconHolder,
              styleSettingsScreen.profileNavEigthChildBg,
            ]}
          >
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
          navigation.navigate("AuthScreen", {
            screen: "Login",
          })
        }
        style={styleSettingsScreen.profileAuthLogoutWrapper}
      >
        <Text style={styleSettingsScreen.profileAuthLogoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
