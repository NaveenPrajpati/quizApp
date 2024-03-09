import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../context/MyContext';
import quizQuestions from '../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const {correctAnswerd, setCorrectAnswerd, previousScore, setPreviousScore} =
    useContext(Context);
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('score');
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;

      setPreviousScore(data);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{height: 200, backgroundColor: 'purple', padding: 30}}>
        <Text style={{color: 'white', fontSize: 30, fontWeight: '600'}}>
          Lets Play
        </Text>
        <Text style={{color: 'white'}}>And be the first</Text>
        <View
          style={{
            height: 200,
            width: '100%',
            backgroundColor: 'yellow',
            marginTop: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {previousScore ? (
            <View>
              <Text style={{fontSize: 26, fontWeight: '500'}}>
                Your previous Score
              </Text>
              <Text
                style={{fontSize: 34, fontWeight: '500', textAlign: 'center'}}>
                {previousScore}/{quizQuestions.length}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={{fontSize: 26, fontWeight: '500'}}>
                play and get on Top
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={{marginTop: 150}}>
        <View
          style={{
            height: 200,
            width: '100%',
            backgroundColor: 'lightgray',
            marginVertical: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30}}>Your current score</Text>
          <Text style={{fontSize: 30}}>
            {correctAnswerd}/{quizQuestions.length}
          </Text>
        </View>
        <Button
          mode="contained"
          onPress={() => {
            setCorrectAnswerd(0);
            navigation.navigate('Quize');
          }}>
          start quize
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
