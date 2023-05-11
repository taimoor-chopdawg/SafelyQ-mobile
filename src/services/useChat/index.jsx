import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_BUSINESS_CONVERSATION_LIST} from './request';

export const useChat = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [searchUser, setSearchUser] = useState('');

  const {loading, error, data, refetch} = useQuery(GET_BUSINESS_CONVERSATION_LIST, {
    onCompleted: data => {
      const {getUser} = data || {};
      const {user} = getUser;
      setUsers(user.conversations);
      setFilterUsers(user.conversations)
    },
    onError: err => {
      console.log('useChat Error ', err);
    },
  });

  const onSearchMessages = (text) => {
    setSearchUser(text);

    const filteredUser = filterUsers.filter(
      ({business: {name}, recentMessages}) =>
        String(name).toLowerCase().includes(text.toLowerCase()) ||
        String(recentMessages[0].message.commentText)
          .toLowerCase()
          .includes(text.toLowerCase()),
    );
    setUsers(filteredUser);
  };

  return {
    users,
    searchUser,
    setSearchUser,
    onSearchMessages,
    loading,
    refetch
  };
};
