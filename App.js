import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SplashScreen, WalkThrough} from './screens/LaunchScreen';
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
} from './screens/AuthScreen';
import {ConsumerDashboard} from './screens/HomeScreen/ConsumerScreen';
import {
  BankDashboard,
  Transaction,
  TransactionInfo,
  AccountGrid,
  CardGrid,
  CardOperations,
  Settings,
  GetHelp,
  ChangeQA,
  ChangePin,
  DepositOperations,
  WithdrawalOperations,
  TransferOperations,
} from './screens/HomeScreen/BankFIScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

// Launch Stack  //
const LaunchStack = createStackNavigator();
const LaunchStackScreen = () => {
  return (
    <LaunchStack.Navigator headerMode="none" initialRouteName={'SplashScreen'}>
      <LaunchStack.Screen name="SplashScreen" component={SplashScreen} />
      <LaunchStack.Screen name="WalkThrough" component={WalkThrough} />
    </LaunchStack.Navigator>
  );
};

//Auth Stack  //
const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator headerMode="none" initialRouteName={'Login'}>
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

//QAPP Stack  //
const QappUserStack = createStackNavigator();
const QappUserScreen = () => {
  return (
    <QappUserStack.Navigator
      headerMode="none"
      initialRouteName={'ConsumerDashboard'}>
      <QappUserStack.Screen
        name="ConsumerDashboard"
        component={ConsumerDashboard}
      />
    </QappUserStack.Navigator>
  );
};

//Bank FI Stack  //
const BankFIStack = createStackNavigator();
const BankFIScreen = () => {
  return (
    <BankFIStack.Navigator headerMode="none" initialRouteName={'BankDashboard'}>
      <BankFIStack.Screen name="BankDashboard" component={BankDashboard} />
      <BankFIStack.Screen
        name="DepositOperations"
        component={DepositOperations}
      />
      <BankFIStack.Screen
        name="WithdrawalOperations"
        component={WithdrawalOperations}
      />
      <BankFIStack.Screen
        name="TransferOperations"
        component={TransferOperations}
      />
      <BankFIStack.Screen name="Transaction" component={Transaction} />
      <BankFIStack.Screen name="TransactionInfo" component={TransactionInfo} />
      <BankFIStack.Screen name="AccountGrid" component={AccountGrid} />
      <BankFIStack.Screen name="CardGrid" component={CardGrid} />
      <BankFIStack.Screen name="CardOperations" component={CardOperations} />
      <BankFIStack.Screen name="Settings" component={Settings} />
      <BankFIStack.Screen name="GetHelp" component={GetHelp} />
      <BankFIStack.Screen name="ChangeQA" component={ChangeQA} />
      <BankFIStack.Screen name="ChangePin" component={ChangePin} />
    </BankFIStack.Navigator>
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
      initialRouteName={'LaunchStackScreen'}>
      <RootStack.Screen name="LaunchScreen" children={LaunchStackScreen} />
      <RootStack.Screen name="AuthScreen" children={AuthStackScreen} />
      <RootStack.Screen name="QappUserScreen" children={QappUserScreen} />
      <RootStack.Screen name="BankFIScreen" children={BankFIScreen} />
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
