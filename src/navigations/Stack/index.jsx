import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN} from '@constants';
import { Home, SearchBusiness, Login, Settings, ThankYou, BusinessDetails, Profile, ChangedPassword, AboutUs, ContactUs, ChatList, ChatScreen, ChatMedia} from '@screens';

const StackNavigation = createNativeStackNavigator();

const {Navigator, Screen} = StackNavigation;

export const AuthStack = () => (
  <Navigator
    initialRouteName={SCREEN.LOGIN}
    screenOptions={{headerShown: false}}>
    {/* <Screen name={SCREEN.LANDING} component={Login} /> */}
    <Screen name={SCREEN.LOGIN} component={Login} />
    {/* <Screen name={SCREEN.BUSINESS_DETAILS} component={BusinessDetails} /> */}
  </Navigator>
);

export const HomeStack = () => (
  <Navigator
    initialRouteName={SCREEN.HOME}
    screenOptions={{headerShown: false}}>
    <Screen name={SCREEN.HOME} component={Home} />

    {/* Stack Pages */}
    <Screen name={SCREEN.SETTINGS} component={Settings} />
    <Screen name={SCREEN.BUSINESS_DETAILS} component={BusinessDetails} />
    <Screen name={SCREEN.THANK_YOU} component={ThankYou} />

    {/* Settings pages */}
    <Screen name={SCREEN.PROFILE} component={Profile} />
    <Screen name={SCREEN.CHANGED_PASSWORD} component={ChangedPassword} />
    <Screen name={SCREEN.ABOUTUS} component={AboutUs} />
    <Screen name={SCREEN.CONTACTUS} component={ContactUs} />

  </Navigator>
);

export const OnChatStack = () => (
  <Navigator
    initialRouteName={SCREEN.CHAT_LIST}
    screenOptions={{headerShown: false}}>
    <Screen name={SCREEN.CHAT_LIST} component={ChatList} />
    <Screen name={SCREEN.CHAT_SCREEN} component={ChatScreen} />
    <Screen name={SCREEN.CHAT_MEDIA} component={ChatMedia} />
  </Navigator>
);


