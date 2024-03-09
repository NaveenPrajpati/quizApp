import {loginPageStylesheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, TextInput, useTheme} from 'react-native-paper';
import {loginPageStyles} from '../../utils/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [userData, setUserData] = useState({});

  const theme = useTheme();
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userData');
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (data) navigation.navigate('DashBoard');
      setUserData(data);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function handleLogin() {
    console.log(userData);
    if (!userData) {
      ToastAndroid.show('No user found', ToastAndroid.SHORT, ToastAndroid.TOP);
    } else if (userData.email != loginData.email) {
      ToastAndroid.show('incorrect email', ToastAndroid.SHORT);
    } else if (userData.password != loginData.password) {
      ToastAndroid.show('incorrect email', ToastAndroid.SHORT);
    } else navigation.navigate('DashBoard');
  }

  return (
    <View style={loginPageStyles.container}>
      <Text style={loginPageStyles.name}>Login</Text>
      <Text style={loginPageStyles.heading}>Welcome back</Text>
      <Text style={loginPageStyles.info}>
        New here ?{' '}
        <Text
          style={{color: theme.colors.primary}}
          onPress={() => navigation.navigate('Register')}>
          Create account
        </Text>
      </Text>
      <TextInput
        left={<TextInput.Icon icon={'email'} />}
        placeholder="Email"
        style={{borderRadius: 8, backgroundColor: theme.colors.textInputbg}}
        underlineStyle={{display: 'none'}}
        onChangeText={e => {
          setLoginData({...loginData, email: e});
        }}
      />
      <TextInput
        left={<TextInput.Icon icon={'lock'} />}
        placeholder="Placeholder"
        keyboardType=""
        right={
          <TextInput.Affix
            onPress={() => navigation.navigate('ForgetPass')}
            text="forget?"
            textStyle={{color: theme.colors.primary}}
          />
        }
        style={{borderRadius: 8, backgroundColor: theme.colors.textInputbg}}
        underlineStyle={{display: 'none'}}
        onChangeText={e => {
          console.log(e);
          setLoginData({...loginData, password: e});
        }}
      />
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
      {/* <Text style={{textAlign: 'center'}}>or login with</Text> */}
      <View></View>
    </View>
  );
};

export default Login;
