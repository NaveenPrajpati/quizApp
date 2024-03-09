import { loginPageStylesheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput, useTheme } from 'react-native-paper'
import { loginPageStyles } from '../../utils/styles'

const ForgetPass = () => {
    const theme=useTheme()
  return (
    <View style={loginPageStyles.container}>
      <Text style={loginPageStyles.name}>FarmerEats</Text>
      <Text style={loginPageStyles.heading}>Forgot Password?</Text>
      <Text style={loginPageStyles.info}>Remember your pasword? <Text style={{color:theme.colors.primary}}>Login</Text></Text>
      <TextInput left={<TextInput.Icon icon={"phone"}/>} placeholder='Phone' style={{borderRadius:8,backgroundColor:theme.colors.textInputbg}} underlineStyle={{display:'none'}}/>
      <Button mode='contained'>
        Send Code
      </Button>
<View>

</View>
    </View>
  )
}

export default ForgetPass

