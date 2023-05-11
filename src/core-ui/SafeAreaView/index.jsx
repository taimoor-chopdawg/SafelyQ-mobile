import React from 'react';
import {StyleSheet, SafeAreaView as RNSafeAreaView} from 'react-native';
import {useAppTheme} from '@context';
import {COLOR} from '@constants';

export const SafeAreaView = ({children}) => {
  const {theme} = useAppTheme();

  return (
    <RNSafeAreaView style={styles({theme}).container}>
      {children}
    </RNSafeAreaView>
  );
};

const styles = ({theme}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme ? COLOR.lightMode : COLOR.darkMode,
    },
  });
