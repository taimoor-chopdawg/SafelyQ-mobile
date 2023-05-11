import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView, Header, TextInput, Button} from '@core-ui';
import {ICON, COLOR} from '@constants';
import {useAppTheme} from '@context';
import {useSettings} from '@services';

export const ContactUs = () => {
  const {theme} = useAppTheme();
  const {submitContactMessage} = useSettings();

  const [user, setUser] = useState({
    email: '',
    message: '',
  });

  const onhandleChange = (field, value) => {
    setUser({...user, [field]: value});
  };

  return (
    <SafeAreaView>
      <Header title="Contact us" />
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <TextInput
          label="Email"
          value={user.email}
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
          label="Message"
          value={user.message}
          onChangeText={text => onhandleChange('message', text)}
          placeholder="Type message here..."
          icon={
            <ICON.Material
              name="notes"
              color={theme ? COLOR.darkMode : COLOR.lightMode}
              size={15}
            />
          }
          multiline={true}
        />

        <View style={{marginTop: 20}} />
        <Button title="Submit" disabled={true} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
