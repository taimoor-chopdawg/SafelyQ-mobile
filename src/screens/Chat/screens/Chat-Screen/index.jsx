import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView, Text} from '@core-ui';

export const ChatScreen = () => {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 10}}>
        <Text>ChatScreen</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
});
