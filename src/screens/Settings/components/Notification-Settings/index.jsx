import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Divider, Text, Switch} from '@core-ui';
import {RowCardItems} from '@commons';
import {useAppTheme} from '@context';
import {ICON, COLOR} from '@constants';
import {useSettings} from '@services'

export const NotificationSettings = () => {
  const {theme} = useAppTheme();
  const {profileData, updateNotification} = useSettings();

  const [user, setData] = useState(profileData)

  const onHandleChange = (field, value) => {
    setData({...user, [field]: value})
    updateNotification(user)
  }

  useEffect(() => {
    setData(profileData);
  }, [profileData]);

  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontWeight: 'bold'}}>Notifications</Text>
      <Divider />
      <RowCardItems
        LeftIcon={
          <ICON.MaterialCommunity
            name="email-outline"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={20}
          />
        }
        label="Email"
        RightIcon={<Switch value={user.allowEmail} onChange={(value) => onHandleChange('allowEmail', value)} />}
        disabled
      />
      <Divider marginLeft={25} />
      <RowCardItems
        LeftIcon={
          <ICON.FontAwesome5
            name="sms"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={20}
          />
        }
        label="SMS"
        RightIcon={<Switch value={user.allowSms} onChange={(value) => onHandleChange('allowSms', value)} />}
        disabled
      />
      <Divider marginLeft={25} />
      <RowCardItems
        LeftIcon={
          <ICON.FontAwesome
            name="whatsapp"
            color={theme ? COLOR.darkMode : COLOR.lightMode}
            size={20}
          />
        }
        label="WhatsApp"
        RightIcon={<Switch value={user.allowWhatsApp} onChange={(value) => onHandleChange('allowWhatsApp', value)} />}
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
