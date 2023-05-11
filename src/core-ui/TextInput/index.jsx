import React from 'react';
import {TextInput as RNTextInput, StyleSheet, View} from 'react-native';
import {Text} from '@core-ui';
import {useAppTheme} from '@context';
import {COLOR} from '@constants';

export const TextInput = ({
  label,
  icon,
  width,
  value,
  onChangeText,
  keyboardType,
  placeholder,
  maxLenth,
  multiline,
  secureTextEntry,
  disabled,
}) => {
  const {theme} = useAppTheme();
  return (
    <View style={styles().container} pointerEvents={disabled ? 'none' : 'auto'}>
      {Boolean(label) && (
        <View style={{flexDirection: 'row'}}>
          {Boolean(icon) && icon}
          <Text style={styles({theme, icon: Boolean(icon)}).lebelText}>
            {label}
          </Text>
        </View>
      )}
      <View style={styles({theme, width}).inputContainer}>
        <RNTextInput
          style={styles({theme}).insideText}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType ? keyboardType : 'default'}
          maxLength={maxLenth ? maxLenth : 100}
          multiline={multiline ? multiline : false}
          secureTextEntry={secureTextEntry ? secureTextEntry : false}
          placeholderTextColor={theme ? COLOR.gray : COLOR.lightMode}
        />
      </View>
    </View>
  );
};

const styles = ({theme, width, icon} = {}) =>
  StyleSheet.create({
    container: {
      marginTop: 18,
    },
    lebelText: {
      color: theme ? COLOR.darkMode : COLOR.lightMode,
      paddingLeft: icon ? 8 : 0,
      marginBottom: 8,
      fontWeight: 'bold',
    },
    inputContainer: {
      width: width ? width : '100%',
      height: 45,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme ? COLOR.gray : COLOR.lightMode,
      justifyContent: 'center',
      paddingLeft: 10,
    },
    insideText: {
      color: theme ? COLOR.darkMode : COLOR.lightMode,
    },
  });
