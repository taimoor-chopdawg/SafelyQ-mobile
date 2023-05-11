import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';
import {useAppTheme} from '@context';

export const StatusBar = () => {
    
  const {theme} = useAppTheme();

  const backgroundStyle = {
    backgroundColor: theme ? '#222' : '#F3F3F3',
  };

  return (
    <RNStatusBar
      barStyle={theme ? 'dark-content' : 'light-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
  );
};
