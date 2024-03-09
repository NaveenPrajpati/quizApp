import { StyleSheet } from 'react-native';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
export const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#d6715b',
      secondary: '#f8c569',
      tertiary:'#5ea25e',
      text:'#261c12',
      white:'white',
      textInputbg:'#efedec'
    },
  };

  export const loginPageStyles=StyleSheet.create({
    container:{
        padding:20,gap:20,backgroundColor:'white',flex:1
    },
    name:{
       fontSize:16,
       fontWeight:'400'
    },
    heading:{
        marginTop:40,
        fontSize:32,
        fontWeight:'700'
    },
    info:{
        fontSize:14,
        opacity:.7,
        fontWeight:'500'
    },
    inputStyle:{
        
    }
})