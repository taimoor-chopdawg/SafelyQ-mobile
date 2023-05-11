import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView, Header, TextInput, Button} from '@core-ui';
import {ICON, COLOR} from '@constants';
import {useAppTheme} from '@context';
import {useSettings} from '@services'

export const ChangedPassword = () => {
  const {theme} = useAppTheme();
  const {passwordUpdate} = useSettings();

  const [user, setUser] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const onhandleChange = (field, value) => {
    setUser({...user, [field]: value});
  };

  return (
    <SafeAreaView>
      <Header title="Change Password" />
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <TextInput
          label="Current Password"
          value={user.oldPassword}
          onChangeText={text => onhandleChange('oldPassword', text)}
          placeholder="Type..."
          icon={
            <ICON.AntDesign
              name="lock"
              color={theme ? COLOR.darkMode : COLOR.lightMode}
              size={15}
            />
          }
          secureTextEntry
        />
        <TextInput
          label="New Password"
          value={user.newPassword}
          onChangeText={text => onhandleChange('newPassword', text)}
          placeholder="Type..."
          icon={
            <ICON.AntDesign
              name="lock"
              color={theme ? COLOR.darkMode : COLOR.lightMode}
              size={15}
            />
          }
          secureTextEntry
        />
        <TextInput
          label="Confirm Password"
          value={user.confirmPassword}
          onChangeText={text => onhandleChange('confirmPassword', text)}
          placeholder="Type..."
          icon={
            <ICON.Feather
              name="phone"
              color={theme ? COLOR.darkMode : COLOR.lightMode}
              size={15}
            />
          }
          secureTextEntry
        />
        <View style={{marginTop: 20}} />
        <Button title="Update" disabled={true} onPress={() => passwordUpdate(user)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
