import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ICON} from '@constants';

export const NoNoticationYet = () => {
  return (
    <View style={{marginHorizontal: 10, marginTop: 10}}>
      <View style={styles.innerContainer}>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <ICON.MaterialCommunity name="bell-outline" size={25} color="red" />
        </View>
        <Text style={styles.text}>No Notifications yet!</Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 10}} />
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    width: '100%',
    height: 85,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
