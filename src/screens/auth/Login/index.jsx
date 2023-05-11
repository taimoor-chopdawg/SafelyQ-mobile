import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from '@core-ui';
import {useAuth} from '@context';
import { Button} from '@core-ui';

export const Login = () => {
  const {login, currentUser} = useAuth();

  console.log('[currentUser Login Screen] ', currentUser);

  return (
    <SafeAreaView>
      <Button
        title="Login"
        isLoading={false}
        disabled={false}
        onPress={() => login()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
