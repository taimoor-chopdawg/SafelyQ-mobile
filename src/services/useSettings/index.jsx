import React, {useState} from 'react';
import {useAuth} from '@context';
import {useMutation, useQuery} from '@apollo/client';
import {DELETE_ACCOUNT, SAVE_USER_PROFILE, GET_USER_PROFILE, GET_ABOUT_US_INFO} from './request'

export const useSettings = () => {
  const {logout} = useAuth();

  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    allowEmail: true,
    allowSms: true,
    allowWhatsApp: true
  });
  const [aboutUs, setAboutUs] = useState({});
  const [isVisible, setIsVisible] = useState(false)

  const {data: isData, error, loading, refetch} = useQuery(GET_USER_PROFILE,{
    onCompleted: data => {
      const {getUserProfile} = data || {};
      const {user} = getUserProfile;
      const obj = {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        allowEmail: user.userPreferences.allowEmail,
        allowSms: user.userPreferences.allowSms,
        allowWhatsApp: user.userPreferences.allowWhatsApp
      }
      setProfileData(obj)
    },
    onError: err => {
      console.log('GET_USER_PROFILE', err)
    }
  });

  const {data: AboutUsData} = useQuery(GET_ABOUT_US_INFO,{
  onCompleted: data => {
    const {getAboutUsPageInfo} = data || {};
    const {aboutUs} = getAboutUsPageInfo;
    setAboutUs(aboutUs)
  },
  onError: err => {
    console.log('GET_ABOUT_US_INFO', err)
  }
  });

  const [saveUserProfile] = useMutation(SAVE_USER_PROFILE);
  const [deleteMyAccount] = useMutation(DELETE_ACCOUNT)

  const profileUpdate = data => {
    saveUserProfile({
      variables: {
        userProfileInput: data
      },
    }).then((result) => {
      const response = result.data.saveUserProfile;
      if(response.isUpdated === true){
        refetch()
        alert('Successfully Updated')
      }
      if (response.isVerficationCodeSent === false) {
        alert(response.error)
      }
      if (response.isVerficationCodeSent === true) {
        setIsVisible(true)
      }
    }).catch((err) => {
        alert(err)
    })
  };

  const passwordUpdate = async data => {

  };

  const updateNotification = data => {
    saveUserProfile({
      variables: {
        userProfileInput: data
      },
    }).then((result) => {
      const response = result.data.saveUserProfile;  
      if(response.isUpdated === true){
        refetch();
        alert('Successfully Updated')
      }  
    }).catch((err) => {
        alert(err)
    })
  };

  const submitContactMessage = data => {};

  const deleteAccount = data => {
    deleteMyAccount();
    logout();
  };

  return {
    logout,
    profileData,
    isVisible,
    profileUpdate,
    passwordUpdate,
    submitContactMessage,
    updateNotification,
    deleteAccount,
    aboutUs
  };
};
