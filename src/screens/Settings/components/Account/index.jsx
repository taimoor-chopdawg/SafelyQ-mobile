import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Divider, Text} from '@core-ui';
import {useAppTheme} from '@context';
import {ICON, COLOR} from '@constants';
import {RowCardItems} from '@commons';
import {useSettings} from '@services';

export const Account = () => {
  const {theme} = useAppTheme();

  const {deleteAccount, logout} = useSettings();

  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontWeight: 'bold'}}>Account</Text>
      <Divider />
      <RowCardItems
        LeftIcon={
          <ICON.AntDesign
            name="logout"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={20}
          />
        }
        label="Sign Out"
        RightIcon={<View />}
        disabled={false}
        onPress={() => logout()}
      />
      <Divider marginLeft={25} />
      <RowCardItems
        LeftIcon={
          <ICON.AntDesign
            name="deleteuser"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={20}
          />
        }
        label="Delete Account"
        RightIcon={<View />}
        disabled={false}
        onPress={() => {}}
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
