import React from 'react';
import {SafeAreaView, StatusBar} from '@core-ui';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '@context';
import {linking} from '@configs';
import {AuthStack, DashboardTab} from '@navigations';

export const SafelyQ = () => {
  const {isAuthunticated} = useAuth();

  return (
    <SafeAreaView>
      <StatusBar />
      <NavigationContainer linking={linking}>
        {!isAuthunticated && <AuthStack />}
        {isAuthunticated && <DashboardTab />}
      </NavigationContainer>
    </SafeAreaView>
  );
};
