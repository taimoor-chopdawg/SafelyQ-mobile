import React, {useState, useEffect} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import {HubConnectionBuilder} from '@microsoft/signalr';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import {Constants} from '@constants';
import {useNotifications, useChat} from '@services'
import {MARK_NOTIFICATION_ISVIEWED, MARK_NOTIFICATION_READ, GET_NOTICATION_COUNT, GET_MESSAGE_COUNT} from './request';

export const useBadges = () => {
  const [connection, setConnection] = useState(null);
  const [noticationCount, setNoticationCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  const {refetch: refresh_Notifications} = useNotifications();
  const {refetch: refresh_Chat} = useChat();

  const {loading: isLoading, error: isError, data: isData, refetch: isNotificationCount_refetch} = useQuery(GET_NOTICATION_COUNT,{
    onCompleted: data => {
      const {isProfileComplete} = data || {};
      const count = isProfileComplete?.unviewedCount;
      setNoticationCount(count)
    },
    onError: err => {
      console.log('Error Notication ', err)
    }
  });

  const {loading, error, data, refetch} = useQuery(GET_MESSAGE_COUNT, {
    onCompleted: data => {
        const {getUser} = data || {};
        const unreadMsg = getUser?.user?.conversationsSummary?.unreadCount;
        setMessageCount(unreadMsg);
    },
    onError: err => {
      console.log('useNotifications Error ', err);
    },
  });

  const [onMarkViewed] = useMutation(MARK_NOTIFICATION_ISVIEWED);
  const [onMarkRead] = useMutation(MARK_NOTIFICATION_READ);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(
        `${Config.WEBSOCKET_URL}?user=${Constants.SIGNALR_USER_TYPE.ConsumerUser}`,
        {
          accessTokenFactory: async () =>
            await AsyncStorage.getItem('accessToken'),
        },
      )
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then((result) => {
          console.log('Connected!');
          const subscriberEventName = Constants.getSubscriberEventName(
            Constants.SIGNALR_EVENTS.BusinessMessageSent,
          );
          connection.on(subscriberEventName, onTriggerWebSocket);
        })
        .catch((e) => console.log('Connection failed: ', e));
    }
  }, [connection]);

  const onTriggerWebSocket = () => {
    console.log('Badges Refresh');
    refetch();
    isNotificationCount_refetch();
    refresh_Notifications();
    refresh_Chat();
  };

  const handleAsViewed =  () => {
     onMarkViewed().then((result) => {
      isNotificationCount_refetch()
     }).catch((err) => {
      console.log('MARK_NOTIFICATION_ISVIEWED',err)
     })
  };

  const handleAsMark = correlationKey => {
    onMarkRead({variables: {correlationKey: correlationKey}});
  };

  return {
    messageCount,
    noticationCount,
    handleAsMark,
    handleAsViewed
  };
};
