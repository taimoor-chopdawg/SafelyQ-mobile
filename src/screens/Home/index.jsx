import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from '@core-ui';
import {useAppTheme, useAuth} from '@context';
import {Header} from '@commons';

export const Home = () => {

  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 10}}>
        <Header/>
      </View>
    </SafeAreaView>
  );
};
