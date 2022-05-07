import React from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  styleFormComponents,
  styleAuthScreen,
  styleButtons,
} from "../../assets/css";
import { COLORS, SIZES, icons, FONTS } from "../../constants";

const InitiateDonationForm = () => {
  const [initiatePay, setInitiatePay] = React.useState(false);
  const navigation = useNavigation();

  return (
    <>
      <View style={styleFormComponents.formWrapper}>
        {/* Select Bank */}
        <View style={{ marginTop: SIZES.padding * 1 }}>
          <Text style={styleFormComponents.formLabel}>Select Bank</Text>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Select Bank"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />

          <TouchableOpacity
            style={styleFormComponents.defaultTextInputIconHolder}
            onPress={() => console.log("Select Bank Pressed")}
          >
            <Image
              source={icons.chevronCircleDown}
              style={styleFormComponents.defaultTextInputIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Select Acount */}
        <View style={{ marginTop: SIZES.padding * 1 }}>
          <Text style={styleFormComponents.formLabel}>Select Acount</Text>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Select Bank"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />

          <TouchableOpacity
            style={styleFormComponents.defaultTextInputIconHolder}
            onPress={() => console.log("Select Account Pressed")}
          >
            <Image
              source={icons.chevronCircleDown}
              style={styleFormComponents.defaultTextInputIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Amount */}
        <View style={{ marginTop: SIZES.padding * 1 }}>
          <Text style={styleFormComponents.formLabel}>Amount</Text>
          <TextInput
            style={styleFormComponents.defaultTextInput}
            placeholder="Amount"
            placeholderTextColor={COLORS.textBlue}
            selectionColor={COLORS.textBlue}
          />
        </View>
      </View>

      {initiatePay ? (
        <>
          <View
            style={{
              flexDirection: "column",
            }}
          >
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
                  textAlign: "center",
                  marginVertical: SIZES.padding * 2,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}
              >
                Enter your Transaction PIN
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#052D40",
                width: SIZES.width * 0.5,
                height: SIZES.height * 0.1,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginVertical: SIZES.padding * 1.3,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SummaryScreen",{
                      typeUrl: "donation",
                    })
                  }
                >
                  <Image
                    source={icons.faceIDIcon}
                    style={{
                      width: 38,
                      height: 38,
                      marginVertical: SIZES.padding * 1,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SummaryScreen",{
                      typeUrl: "donation",
                    })
                  }
                >
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
        </>
      ) : (
        <View
          style={[
            styleAuthScreen.authButtonWrapper,
            { marginVertical: SIZES.padding * 2 },
          ]}
        >
          <TouchableOpacity
            style={styleButtons.defaultButton}
            onPress={() => setInitiatePay(true)}
          >
            <Text style={styleButtons.defaultButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default InitiateDonationForm;
