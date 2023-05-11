import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAuth} from '@context'

export const Card = () => {
  const {login, logout, currentUser, isAuthunticated} = useAuth();
  return (
    <LinearGradient
      colors={['#3C3A49', '#04020F', '#3C3A49']}
      style={styles.box}>
      <Text style={styles.buttonText}>{currentUser?.email}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 200,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
