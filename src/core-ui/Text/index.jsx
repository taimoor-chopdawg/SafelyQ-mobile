import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {useAppTheme} from '@context';
import {COLOR} from '@constants';

export const Text = ({children, style}) => {
  const {theme} = useAppTheme();
  return <RNText style={[styles({theme}).textStyle, style]}>{children}</RNText>;
};

const styles = ({theme}) =>
  StyleSheet.create({
    textStyle: {
      color: theme ? COLOR.darkMode : COLOR.lightMode,
    },
  });
