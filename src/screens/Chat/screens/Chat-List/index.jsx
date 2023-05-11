import React, {useCallback} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text} from '@core-ui';
import {Header} from '@commons';
import {useChat} from '@services';
import {SCREEN} from '@constants';
import {getTimeOfMessage, getSubString} from '@helpers';

export const ChatList = () => {
  const navigation = useNavigation();
  const {users} = useChat();

  useFocusEffect(
    useCallback(() => {
      // console.log('focus');
      // refetch();
      return () => {
        // console.log('unfocus');
      };
    }, []),
  );

  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 10}}>
        <Header />

        <ScrollView showsVerticalScrollIndicator={false}>
          {users.map((business, index) => (
            <View key={index}>
              <TouchableOpacity
                style={styles().container}
                onPress={() => console.log('next screen')}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles().imageContainer}
                    onPress={() => console.log('full screen image')}>
                    <Image
                      source={{
                        uri: business?.business?.picture
                          ? business?.business?.picture?.path
                          : 'https://dummyimage.com/640x360/fff/aaa',
                      }}
                      style={styles().imageSize}
                    />
                  </TouchableOpacity>

                  <View style={{width: '65%'}}>
                    <Text style={styles().textArea} numberOfLines={1}>
                        {getSubString(business?.business?.name, 20)}
                    </Text>
                    <Text
                      style={{paddingLeft: 10, marginTop: 5, color: 'gray'}}
                      numberOfLines={1}>
                        {getSubString(business.recentMessages[0].message?.commentText, 20)}
                    </Text>
                  </View>
                </View>

                <View style={{alignItems: 'flex-end'}}>
                  <Text style={{color: 'gray'}}>
                    {getTimeOfMessage(
                      business?.recentMessages[0]?.message?.createdTime,
                    )}
                  </Text>
                  <View style={styles({unreadCount: business?.unreadCount}).badge}>
                    <Text style={styles({unreadCount: business?.unreadCount}).badgeText}>
                      {business?.unreadCount}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles().separator} />
            </View>
          ))}
          <View style={{marginBottom: 50}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = ({unreadCount} = {}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 70,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    separator: {
      height: 0.8,
      backgroundColor: 'lightgray',
      marginBottom: 10,
      marginLeft: 65,
    },
    imageContainer: {
      width: 48,
      height: 48,
      borderRadius: 5,
    },
    imageSize: {
      width: '100%',
      height: '100%',
      borderRadius: 40,
      resizeMode: 'cover',
    },
    textArea: {
      paddingLeft: 10,
      fontWeight: 'bold',
      fontSize: 16,
    },
    badge: {
      width: unreadCount > 99 ? 25 : 20,
      height: 20,
      borderRadius: 50,
      backgroundColor: unreadCount > 0 ? 'red' : 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
    },
    badgeText: {
      color: unreadCount > 0 ? 'white' : 'transparent',
      fontSize: 13,
    },
  });
