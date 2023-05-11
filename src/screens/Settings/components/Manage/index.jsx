import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Divider, Text, Switch} from '@core-ui';
import {useAppTheme} from '@context';
import {ICON, COLOR, SCREEN} from '@constants';
import {RowCardItems} from '@commons';

export const Manage = () => {
  const {theme, onChangeAppTheme} = useAppTheme();
  const navigation = useNavigation()

  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontWeight: 'bold'}}>Manage</Text>
      <Divider />

      <RowCardItems
        LeftIcon={
          <ICON.AntDesign
            name="user"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={20}
          />
        }
        label="Profile"
        RightIcon={
          <ICON.Ionicons
            name="chevron-forward"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={24}
          />
        }
        disabled={false}
        onPress={() => navigation.navigate(SCREEN.PROFILE)}
      />
      <Divider marginLeft={25} />
      <RowCardItems
        LeftIcon={
          <ICON.Octicons
            name="lock"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={20}
          />
        }
        label=" Changed Password"
        RightIcon={
          <ICON.Ionicons
            name="chevron-forward"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={24}
          />
        }
        disabled={false}
        onPress={() => navigation.navigate(SCREEN.CHANGED_PASSWORD)}
      />
      <Divider marginLeft={25} />

      <RowCardItems
        LeftIcon={
          <ICON.Entypo
            name="light-up"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={20}
          />
        }
        label="Light Mode"
        RightIcon={<Switch value={theme} onChange={() => onChangeAppTheme(!theme)}/>}
        disabled
      />

      <Divider marginLeft={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
