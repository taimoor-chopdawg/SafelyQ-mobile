import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

export const Button = ({
  title,
  isLoading,
  disabled,
  width,
  height,
  color,
  onPress,
  isBorder
}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <LinearGradient
        colors={isBorder ? ['white', 'white'] : ['#2887ef', '#423088']}
        style={styles({disabled, width, height, color, isBorder}).container}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles({disabled, isBorder}).text}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
