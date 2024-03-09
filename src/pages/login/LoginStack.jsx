import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import ForgetPass from './ForgetPass';
import VerifyOtp from './VerifyOtp';
import ResetPass from './ResetPass';
import Register from './Register';

const LoginStack = () => {
  const LoginStack = createNativeStackNavigator();
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Register" component={Register} />
      <LoginStack.Screen name="ResetPass" component={ResetPass} />
      <LoginStack.Screen name="VerifyOtp" component={VerifyOtp} />
      <LoginStack.Screen name="ForgetPass" component={ForgetPass} />
    </LoginStack.Navigator>
  );
};

export default LoginStack;

const styles = StyleSheet.create({});
