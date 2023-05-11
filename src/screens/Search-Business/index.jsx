import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from '@core-ui';
import {Header} from '@commons';

export const SearchBusiness = () => {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 10}}>
        <Header />
        <Text>SearchBusiness</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
