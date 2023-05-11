import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Text} from '@core-ui';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {SCREEN, ICON} from '@constants';
import {styles} from './styles';
import mtimezone from 'moment-timezone';
import {getStatusColor, getStatusName} from '@helpers';

export const ListItem = ({noti, handleAsMark}) => {
  const navigation = useNavigation();

  const name = noti.business === null ? noti?.appointment?.business?.name : noti?.business?.name;
  const correlationKey = noti?.correlationKey;
  const isRead = noti?.isRead;
  const sentChannels = noti?.sentChannels;
  const timeZone = noti?.appointment?.business?.timeZone;
  const description = noti?.content?.replace(/^\s+|\s+$/g, '');
  const date = noti?.createdTime;
  const appointmentId = noti?.appointment?.id;
  const businessId = noti?.appointment?.business?.id;
  const notificationType = noti?.notificationType;
  const image = noti.business === null ? noti?.appointment?.business?.picture?.path : noti?.business?.picture?.path
  const status = noti?.appointment?.status;

  const isBooked = status === 'Booked';
  const isConfirmed = status === 'Confirmed';
  const isCheckedIn = status === 'CheckedIn';

  const now = moment();
  const nowInBizTZ = moment(now).tz(timeZone);
  const apptTime = moment.tz(date, timeZone);
  const notifyTime = moment(apptTime).from(nowInBizTZ);

  const onNavigationHandle = () => {
    handleAsMark(correlationKey);
    if (notificationType == 'BusinessMessage') {
      navigation.navigate(SCREEN.USER_MESSAGE, {businessId: businessId});
    }
    if (notificationType === 'AppointmentComment') {
    }

    if (notificationType === 'Appointment') {
      if (isBooked || isConfirmed || isCheckedIn) {
        navigation.navigate(SCREEN.THANK_YOU, {appointmentId: appointmentId});
      } else {
        navigation.navigate(SCREEN.BUSINESS_DETAILS, {businessId: businessId});
      }
    }

    if (notificationType === 'Business') {
    }
    if (notificationType === 'General') {
    }
  };

  return (
    <View style={{marginHorizontal: 3, marginTop: 5}}>
      <TouchableOpacity style={styles({isRead}).container} onPress={onNavigationHandle}>
        <View style={styles().row}>

          <View style={styles().imageContainer}>
            <Image source={{uri: image}} style={styles().imageSize} />
          </View>

          <View style={styles().detailsSection}>
            <Text style={styles().nameText} numberOfLines={1}>
              {name?.length <= 30 ? name : `${name?.substring(0, 30)}...`}
            </Text>
            <Text style={styles().simpleText} numberOfLines={2}>
              {description?.length <= 50 ? description : `${description?.substring(0, 50)}...`}
            </Text>
            <View style={styles().timeSection}>
              <Text style={styles().simpleText}>{notifyTime}</Text>
              <View style={{flexDirection: 'row'}}>
                {sentChannels?.map((type, index) => (
                  <View key={index} style={{marginTop:5}}>
                    {type === 'Email' && <ICON.MaterialCommunity name="email" color="black" size={18}/>}
                    {type === 'OneSignal' && <ICON.FontAwesome name="bell-o" color="black" size={18} />}
                    {type === 'SMS' && <ICON.FontAwesome5 name="sms" color="black" size={18} />}
                  </View>
              ))}
              </View>
              <Text
                style={[styles().simpleText, {color: getStatusColor(status)}]}>
                {getStatusName(status)}
              </Text>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  );
};
