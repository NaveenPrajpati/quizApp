import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {createContext, useContext} from 'react';
import {Button, PaperProvider} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './utils/styles';
import LoginStack from './pages/login/LoginStack';
import DashBoard from './pages/DashBoard';
import Quize from './pages/Quize';
import MyContext from './context/MyContext';

export const screenW = Dimensions.get('window').width;
export const screenH = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <MyContext>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginStack" component={LoginStack} />
            <Stack.Screen name="DashBoard" component={DashBoard} />
            <Stack.Screen name="Quize" component={Quize} />
          </Stack.Navigator>
        </NavigationContainer>
      </MyContext>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
