import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';
export const Context = createContext();

const MyContext = ({children}) => {
  const [correctAnswerd, setCorrectAnswerd] = useState(0);
  const [previousScore, setPreviousScore] = useState(0);
  const values = {
    correctAnswerd,
    setCorrectAnswerd,
    previousScore,
    setPreviousScore,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default MyContext;
