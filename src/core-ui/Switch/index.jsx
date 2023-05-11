import React from 'react';
import {Switch as RNSwitch, StyleSheet, View} from 'react-native';
import {COLOR} from '@constants';
import {useAppTheme} from '@context';

export const Switch = ({value, onChange}) => {
  const {theme} = useAppTheme();

  return (
    <View style={styles({theme}).container}>
      <RNSwitch
        trackColor={{false: '#2887ef', true: 'lightgray'}}
        thumbColor={value ? '#2887ef' : 'red'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={value}
      />
    </View>
  );
};

const styles = ({theme} = {}) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      color: theme ? COLOR.darkMode : COLOR.lightMode,
    },
  });
