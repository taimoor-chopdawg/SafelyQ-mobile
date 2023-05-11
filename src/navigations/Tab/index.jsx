import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAppTheme} from '@context';
import {SCREEN, COLOR, ICON} from '@constants';
import {SearchBusiness, Favourite, Notification} from '@screens';
import {useBadges} from '@services';
import {HomeStack, OnChatStack} from '../Stack'

const TabNavigation = createBottomTabNavigator();

const {Navigator, Screen} = TabNavigation;

export const DashboardTab = () => {
  const {theme} = useAppTheme();
  const {messageCount, noticationCount} = useBadges();

return (
  <Navigator
    initialRouteName={SCREEN.HOME}
    screenOptions={{
      headerShown: false,
      // tabBarShowLabel: false,
      tabBarActiveTintColor: theme ? COLOR.darkMode : COLOR.lightMode,
      tabBarInactiveTintColor: theme ? COLOR.darkMode : COLOR.lightMode,
      tabBarActiveBackgroundColor: theme ? COLOR.lightMode :  COLOR.darkMode,
      tabBarInactiveBackgroundColor: theme ? COLOR.lightMode : COLOR.darkMode
    }}>
    <Screen name={SCREEN.ROOT} component={HomeStack} 
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused, color, size }) => (
        <ICON.Ionicons name={ focused ? 'home' :'home-outline'} color={color} size={size} />
      ),
    }}/>
    <Screen name={SCREEN.SEARCH_BUSINESS} component={SearchBusiness} 
     options={{
      tabBarLabel: 'Search',
      tabBarIcon: ({ focused, color, size  }) => (
        <ICON.Ionicons name={ focused ? 'search-sharp' : 'search-outline'} color={color} size={size} />
      ),
    }}/>
    <Screen name={SCREEN.FAVOURITE} component={Favourite} 
     options={{
      tabBarLabel: 'Favourite',
      tabBarIcon: ({ focused, color, size }) => (
        <ICON.Material name={ focused ? 'favorite' :'favorite-border'} color={color} size={size} />
      ),
    }}/>
    <Screen name={SCREEN.NOTIFICATION} component={Notification} 
     options={{
      tabBarLabel: 'Notification',
      tabBarBadge: noticationCount,
      tabBarBadgeStyle:{backgroundColor: noticationCount > 0 ? 'red' : 'transparent'},
      tabBarIcon: ({ focused, color, size }) => (
        <ICON.FontAwesome name={ focused ? 'bell' :'bell-o'} color={color} size={size} />
      ),
    }}/>
    <Screen name={SCREEN.CHAT} component={OnChatStack} 
     options={{
      tabBarLabel: 'Chat',
      tabBarBadge: messageCount,
      tabBarBadgeStyle:{backgroundColor: messageCount > 0 ? 'red' : 'transparent'},
      tabBarIcon: ({ focused, color, size }) => (
        <ICON.Ionicons name={ focused ? 'chatbubble-ellipses' :'chatbubble-ellipses-outline'} color={color} size={size} />
      ),
    }}/>
  </Navigator>
)};
