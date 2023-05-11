import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView, Text} from '@core-ui';
import {Header} from '@commons';

export const Favourite = () => {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 10}}>
        <Header />
        <Text>Favourite</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
