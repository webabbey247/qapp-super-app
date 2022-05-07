import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SplashScreen, WalkThrough } from "./screens/LaunchScreen";
import {
  Login,
  OTPAuth,
  SignUp,
  OTPSignUp,
  BankAccountLogin,
  OnboardBankAccount,
  ResetPassword,
  NewPassword,
  FinalScreen,
} from "./screens/AuthScreen";

import {
  Dashboard,
  DonationScreen,
  AddDonation,
  InitiateDonation,
  SummaryScreen
} from "./screens/HomeScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

// Launch Stack  //
const LaunchStack = createStackNavigator();
const LaunchStackScreen = () => {
  return (
    <LaunchStack.Navigator headerMode="none" initialRouteName={"SplashScreen"}>
      <LaunchStack.Screen name="SplashScreen" component={SplashScreen} />
      <LaunchStack.Screen name="WalkThrough" component={WalkThrough} />
    </LaunchStack.Navigator>
  );
};

//Auth Stack  //
const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator headerMode="none" initialRouteName={"Login"}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="OTPAuth" component={OTPAuth} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="OTPSignUp" component={OTPSignUp} />
      <AuthStack.Screen name="BankAccountLogin" component={BankAccountLogin} />
      <AuthStack.Screen
        name="OnboardBankAccount"
        component={OnboardBankAccount}
      />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
      <AuthStack.Screen name="NewPassword" component={NewPassword} />
      <AuthStack.Screen name="FinalScreen" component={FinalScreen} />
    </AuthStack.Navigator>
  );
};

//Main Stack  //
const MainStack = createStackNavigator();
const MainScreen = () => {
  return (
    <MainStack.Navigator headerMode="none" initialRouteName={"Dashboard"}>
      <MainStack.Screen name="Dashboard" component={Dashboard} />
      <MainStack.Screen name="DonationScreen" component={DonationScreen} />
      <MainStack.Screen name="AddDonation" component={AddDonation} />
      <MainStack.Screen name="InitiateDonation" component={InitiateDonation} />
      <MainStack.Screen name="SummaryScreen" component={SummaryScreen} />
    </MainStack.Navigator>
  );
};

// Root Stack //
const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"LaunchStackScreen"}
    >
      <RootStack.Screen name="LaunchScreen" children={LaunchStackScreen} />
      <RootStack.Screen name="AuthScreen" children={AuthStackScreen} />
      <RootStack.Screen name="MainScreen" children={MainScreen} />
    </RootStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
