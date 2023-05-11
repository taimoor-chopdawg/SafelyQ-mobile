import React, {createContext, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Theme = createContext();
const {Provider} = Theme;

export const useAppTheme = () => useContext(Theme);

export const AppTheme = ({children}) => {
  const [theme, setTheme] = useState(true);

  const buildInTheme = useColorScheme() === 'light';

  useEffect(() => {
    _retrieveData();
  }, []);

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('isTheme');
      if (value !== null) {
        setTheme(value === 'true' ? true : false);
      } else {
        setTheme(buildInTheme);
      }
    } catch (error) {
      console.log('Retrive Data AsyncStorage Error');
    }
  };

  const onChangeAppTheme = async value => {
    if (value) {
      setTheme(value);
      await AsyncStorage.setItem('isTheme', 'true');
    } else {
      setTheme(value);
      await AsyncStorage.setItem('isTheme', 'false');
    }
  };

  return (
    <Provider
      value={{
        theme,
        onChangeAppTheme,
      }}>
      {children}
    </Provider>
  );
};
