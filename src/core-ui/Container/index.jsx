import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Container = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
