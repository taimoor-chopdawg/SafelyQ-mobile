import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView, Header, TextInput, Button} from '@core-ui';
import {ICON, COLOR} from '@constants';
import {useAppTheme, useAuth} from '@context';
import {useSettings} from '@services';

export const Profile = () => {
  const {theme} = useAppTheme();
  const {currentUser} = useAuth();

  const {profileData, profileUpdate, isVisible} = useSettings();

  const [user, setUser] = useState(profileData);

  const onhandleChange = (field, value) => {
    setUser({...user, [field]: value});
  };

  useEffect(() => {
    setUser(profileData);
  }, [profileData]);

  return (
    <SafeAreaView>
      <Header title="Profile" />
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <TextInput
          label="Email"
          value={currentUser.email}
          onChangeText={text => onhandleChange('email', text)}
          placeholder="Type..."
          icon={
            <ICON.MaterialCommunity
              name="email-outline"
              color={theme ? COLOR.darkMode : COLOR.lightMode}
              size={15}
            />
          }
          disabled
        />
        <TextInput
          label="First Name"
          value={user.firstName}
          onChangeText={text => onhandleChange('firstName', text)}
          placeholder="Type..."
          icon={
            <ICON.AntDesign
              name="user"
              color={theme ? COLOR.darkMode : COLOR.lightMode}
              size={15}
            />
          }
        />
        <TextInput
          label="Last Name"
          value={user.lastName}
          onChangeText={text => onhandleChange('lastName', text)}
          placeholder="Type..."
          icon={
            <ICON.AntDesign
              name="user"
              color={theme ? COLOR.darkMode : COLOR.lightMode}
              size={15}
            />
          }
        />
        <TextInput
          label="Phone Number"
          value={user.phoneNumber}
          onChangeText={text => onhandleChange('phoneNumber', text)}
          placeholder="Type..."
          icon={
            <ICON.Feather
              name="phone"
              color={theme ? COLOR.darkMode : COLOR.lightMode}
              size={15}
            />
          }
          keyboardType="number-pad"
        />
        <View style={{marginTop: 20}} />
        <Button
          title="Update"
          disabled={true}
          onPress={() => profileUpdate(user)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
