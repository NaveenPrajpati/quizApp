import {loginPageStylesheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput, useTheme} from 'react-native-paper';
import {loginPageStyles} from '../../utils/styles';

const ResetPass = ({navigation}) => {
  const theme = useTheme();
  return (
    <View style={loginPageStyles.container}>
      <Text style={loginPageStyles.name}>FarmerEats</Text>
      <Text style={loginPageStyles.heading}>Reset Password</Text>
      <Text style={loginPageStyles.info}>
        Remember your pasword?{' '}
        <Text style={{color: theme.colors.primary}}>Login</Text>
      </Text>
      <TextInput
        left={<TextInput.Icon icon={'lock'} />}
        placeholder="New password"
        style={{borderRadius: 8, backgroundColor: theme.colors.textInputbg}}
        underlineStyle={{display: 'none'}}
      />
      <TextInput
        left={<TextInput.Icon icon={'lock'} />}
        placeholder="Confirm New Password"
        right={
          <TextInput.Affix
            onPress={() => navigation.navigate('ForgetPass')}
            text="forget?"
            textStyle={{color: theme.colors.primary}}
          />
        }
        style={{borderRadius: 8, backgroundColor: theme.colors.textInputbg}}
        underlineStyle={{display: 'none'}}
      />
      <Button mode="contained">Submit</Button>

      <View></View>
    </View>
  );
};

export default ResetPass;
