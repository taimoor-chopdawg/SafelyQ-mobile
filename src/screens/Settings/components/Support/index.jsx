import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Divider, Text} from '@core-ui';
import {useAppTheme} from '@context';
import {ICON, COLOR, SCREEN} from '@constants';
import {RowCardItems} from '@commons';

export const Support = () => {
  const {theme} = useAppTheme();
  const navigation = useNavigation();

  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontWeight: 'bold'}}>Support</Text>
      <Divider />
      <RowCardItems
        LeftIcon={
          <ICON.MaterialCommunity
            name="contacts-outline"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={20}
          />
        }
        label="Contact us"
        RightIcon={
          <ICON.Ionicons
            name="chevron-forward"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={24}
          />
        }
        disabled={false}
        onPress={() => navigation.navigate(SCREEN.CONTACTUS)}
      />
      <Divider marginLeft={25} />
      <RowCardItems
        LeftIcon={
          <ICON.Material
            name="import-contacts"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={20}
          />
        }
        label="About us"
        RightIcon={
          <ICON.Ionicons
            name="chevron-forward"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={24}
          />
        }
        disabled={false}
        onPress={() => navigation.navigate(SCREEN.ABOUTUS)}
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
