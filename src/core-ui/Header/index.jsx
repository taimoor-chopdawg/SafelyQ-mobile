import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppTheme} from '@context';
import {COLOR, ICON} from '@constants';

export const Header = ({title, style}) => {
  const {theme} = useAppTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles().row} onPress={() => navigation.goBack()}>
        <ICON.Ionicons name='chevron-back' color={theme ? COLOR.darkMode : COLOR.lightMode} size={24} />
        <Text style={[styles({theme}).textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = ({theme} = {}) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textStyle: {
      color: theme ? COLOR.darkMode : COLOR.lightMode,
      fontWeight: 'bold',
      marginLeft: 10,
      fontSize: 17,
    },
  });
