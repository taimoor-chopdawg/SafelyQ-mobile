import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_USER_NOTIFICATIONS} from './request';

export const useNotifications = () => {
  const [today, setToday] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const {loading, error, data, refetch} = useQuery(GET_USER_NOTIFICATIONS, {
    onCompleted: data => {
      const {getUserNotifications} = data || {};
      const {userNotifications} = getUserNotifications;
      setNotifications(userNotifications);
    },
    onError: err => {
      console.log('useNotifications Error ', err);
    },
  });

  return {
    notifications,
    loading,
    refetch
  };
};
