import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppTheme} from '@context';
import {COLOR} from '@constants';

export const Divider = ({marginLeft}) => {
  const {theme} = useAppTheme();
  return <View style={styles({theme, marginLeft}).container} />;
};

const styles = ({marginLeft, theme} = {}) =>
  StyleSheet.create({
    container: {
      marginLeft: marginLeft ? marginLeft : 0,
      height: 0.5,
      backgroundColor: theme ? COLOR.darkMode : COLOR.lightMode,
      alignSelf: 'stretch',
      marginTop: 8,
      marginBottom: 8,
    },
  });
