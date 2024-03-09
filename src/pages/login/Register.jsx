import {loginPageStylesheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, TextInput, useTheme} from 'react-native-paper';
import {loginPageStyles} from '../../utils/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {
  const theme = useTheme();

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userData', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  function handleRegister() {
    for (const key in registerData) {
      if (registerData[key] === '') {
        ToastAndroid.show(
          'Fill all fields',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );

        return;
      }
    }
    storeData(registerData);
    navigation.navigate('DashBoard');
  }

  return (
    <View style={loginPageStyles.container}>
      <Text style={loginPageStyles.name}>Register</Text>
      <Text style={loginPageStyles.heading}>Enter your details</Text>
      <Text style={loginPageStyles.info}>
        Already have account ?{' '}
        <Text
          style={{color: theme.colors.primary}}
          onPress={() => navigation.goBack()}>
          Login here
        </Text>
      </Text>
      <TextInput
        left={<TextInput.Icon icon={'text'} />}
        placeholder="Name"
        style={{borderRadius: 8, backgroundColor: theme.colors.textInputbg}}
        underlineStyle={{display: 'none'}}
        onChangeText={e => {
          setRegisterData({...registerData, name: e});
        }}
      />
      <TextInput
        left={<TextInput.Icon icon={'email'} />}
        placeholder="Email"
        style={{borderRadius: 8, backgroundColor: theme.colors.textInputbg}}
        underlineStyle={{display: 'none'}}
        onChangeText={e => {
          setRegisterData({...registerData, email: e});
        }}
      />
      <TextInput
        left={<TextInput.Icon icon={'lock'} />}
        placeholder="password"
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
          setRegisterData({...registerData, password: e});
        }}
      />
      <Button onPress={handleRegister} mode="contained">
        Register
      </Button>
      {/* <Text style={{textAlign: 'center'}}>or login with</Text> */}
      <View></View>
    </View>
  );
};

export default Register;
