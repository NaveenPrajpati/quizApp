import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [userName, setuserName] = useState('');
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userData');
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;

      setuserName(data?.name);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text variant="displaySmall">Profile</Text>
      <Text variant="displayMedium">User- {userName}</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('Register');
          AsyncStorage.clear();
        }}>
        Delete user
      </Button>
    </View>
  );
};

export default Profile;
