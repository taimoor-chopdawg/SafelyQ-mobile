import React, {createContext, useContext, useEffect, useState} from 'react';
import {useQuery, HttpLink, ApolloClient, InMemoryCache} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authorize, refresh, revoke, prefetchConfiguration} from 'react-native-app-auth';
import OneSignal from 'react-native-onesignal';
import Config from 'react-native-config';
import {config} from '@configs';
import {GET_CURRENT_USER, useApolloProvider} from '@context';

const defaultAuthState = {
  hasLoggedInOnce: false,
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const AuthContext = createContext();
const {Provider} = AuthContext;

export const useAuth = () => useContext(AuthContext);

export const Auth = ({children}) => {
  const {handleClient} = useApolloProvider();
  const [isAuthunticated, setIsAuthunticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [authState, setAuthState] = useState(defaultAuthState);
  const [userInfo, setUserInfo] = useState(null);

  const {loading, error, data, refetch} = useQuery(GET_CURRENT_USER);

  useEffect(() => {
    if (data) {
      const user = data?.getUser?.user;
      if (user !== null) {
        setCurrentUser(user);
        setIsAuthunticated(true)
        OneSignal.setExternalUserId(user?.email);
      } else {
        setIsAuthunticated(false);
        setCurrentUser(null);
      }
    }
    if (loading) {
      console.log(`[getUser loading]...`, loading);
    }
    if (error) {
      console.log(`[getUser error]... `, error);
    }
  }, [loading, error, data]);

  useEffect(() => {
    let secTimer = setInterval(() => {
      refetch();
    }, 60000 * 7.5);

    return () => clearInterval(secTimer);
  }, []);

  useEffect(() => {
    prefetchConfiguration({
      warmAndPrefetchChrome: true,
      ...config,
    });
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

  const login = async () => {
    try {
      const newAuthState = await authorize(config);
      await AsyncStorage.setItem('accessToken', newAuthState.accessToken);
      const response = makeApolloClient(newAuthState.accessToken);
      handleClient(response);
      setAuthState({
        hasLoggedInOnce: true,
        ...newAuthState,
      });
    } catch (error) {
      alert('Failed to log in', +error.message);
      console.log('Failed to log in ', error.message);
    }
  };

  const logout = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      await revoke(config, {
        tokenToRevoke: accessToken,
        sendClientId: true,
      });
      OneSignal.removeExternalUserId();
      setIsAuthunticated(false)
      setCurrentUser(null)
      setUserInfo(null);
      setAuthState({
        accessToken: '',
        accessTokenExpirationDate: '',
        refreshToken: '',
      });

      await AsyncStorage.removeItem('accessToken');
    } catch (e) {
      console.log(e);
    }
  };

  const handleRefresh = async () => {
    try {
      const newAuthState = await refresh(config, {
        refreshToken: authState.refreshToken,
      });

      setAuthState(current => ({
        ...current,
        ...newAuthState,
        refreshToken: newAuthState.refreshToken || current.refreshToken,
      }));
    } catch (error) {
      alert('Failed to refresh token', error.message);
    }
  };

  return (
    <Provider
      value={{
        isAuthunticated,
        currentUser,
        login,
        logout,
        handleRefresh,
      }}>
      {children}
    </Provider>
  );
};
