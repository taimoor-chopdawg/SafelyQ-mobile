import React, {createContext, useContext, useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ApolloProvider as RNApolloProvider,
  HttpLink,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import Config from 'react-native-config';

const AuthContext = createContext();
const {Provider} = AuthContext;

export const useApolloProvider = () => useContext(AuthContext);

export const ApolloProvider = ({children}) => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      let accessToken = null;
      try {
        accessToken = await AsyncStorage.getItem('accessToken');
        const setClientState = makeApolloClient(accessToken);
        setClient(setClientState);
      } catch (error) {
        console.log('Not getItem from AsyncStorage Error ', error);
      }
    }, 1000);
  }, []);

  const makeApolloClient = token => {
    const link = new HttpLink({
      uri: `${Config.API_HOST}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const cache = new InMemoryCache();
    const client = new ApolloClient({
      link,
      cache,
    });
    return client;
  };

  const handleClient = response => {
    setClient(response);
  };

  if (client === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Provider value={{client, handleClient}}>
      <RNApolloProvider client={client}>{children}</RNApolloProvider>
    </Provider>
  );
};
