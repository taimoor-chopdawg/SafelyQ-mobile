import React, {useCallback} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView} from '@core-ui';
import {Header} from '@commons';
import {useNotifications, useBadges} from '@services';
import {ListItem} from './components';

export const Notification = () => {
  const {notifications} = useNotifications();
  const {handleAsViewed, handleAsMark} = useBadges();

  useFocusEffect(
    useCallback(() => {
      handleAsViewed();
      return () => {};
    }, []),
  );

  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 10}}>
        <Header />

        <ScrollView showsVerticalScrollIndicator={false}>
          {notifications?.map((notify, index) => (
            <ListItem noti={notify} key={index} handleAsMark={handleAsMark} />
          ))}
          <View style={{marginBottom: 100}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
