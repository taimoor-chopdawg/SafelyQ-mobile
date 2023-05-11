
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {Text} from '@core-ui'

export const RowCardItems = ({LeftIcon, label, RightIcon, onPress, disabled}) => (
    <TouchableOpacity style={styles.row} onPress={onPress} disabled={disabled}>
      <View style={styles.row}>
        {LeftIcon}
        <Text style={{marginLeft: 10}}>{label}</Text>
      </View>
      {RightIcon}
    </TouchableOpacity>
  );


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
});

