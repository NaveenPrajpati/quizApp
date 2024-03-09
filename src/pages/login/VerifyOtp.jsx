import {loginPageStylesheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput, useTheme} from 'react-native-paper';
import {loginPageStyles} from '../../utils/styles';
import OtpInputs from 'react-native-otp-inputs';

const VerifyOtp = () => {
  const theme = useTheme();
  return (
    <View style={loginPageStyles.container}>
      <Text style={loginPageStyles.name}>FarmerEats</Text>
      <Text style={loginPageStyles.heading}>Verify OTP</Text>
      <Text style={loginPageStyles.info}>
        Remember your pasword?{' '}
        <Text style={{color: theme.colors.primary}}>Login</Text>
      </Text>
      <View>
        <OtpInputs
          handleChange={code => {
            console.log(code);
          }}
          numberOfInputs={5}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
            marginTop: 25,
          }}
          inputStyles={{
            fontSize: 25,
            padding: 2,
            textAlign: 'center',
          }}
          inputContainerStyles={{
            justifyContent: 'center',
            width: 59,
            height: 59,
            borderRadius: 8,
            backgroundColor: theme.colors.textInputbg,
          }}
        />
      </View>
      <Button mode="contained">Submit</Button>
      <Text
        style={{
          color: 'black',
          textDecorationLine: 'underline',
          textAlign: 'center',
        }}>
        Resend Code
      </Text>
    </View>
  );
};

export default VerifyOtp;
