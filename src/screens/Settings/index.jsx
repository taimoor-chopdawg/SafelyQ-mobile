import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView, Header, Text} from '@core-ui';
import {Manage, NotificationSettings, Support, Legal, Account} from './components';
import Config from 'react-native-config';
import {useSettings} from '@services'

export const Settings = () => {
  const {profileData, profileUpdate, isVisible} = useSettings()
  return (
    <SafeAreaView>
      <Header title="Settings" />
      <View style={{marginHorizontal: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Manage />
          <NotificationSettings />
          <Support />
          {/* <Legal /> */}
          <Account />

          <Text style={styles.text}>
            {Config.APP_MODE_URL} - Version: {Config.APP_VERSION}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
});
