import React from 'react';
import {View, ScrollView, Image, TouchableOpacity, Alert, Linking} from 'react-native';
import {ICON} from '@constants';

export const Youtube = ({media}) => {
  const openYoutube = (video) => {
    Alert.alert(
      "Open Youtube?" ,"Do you want to leave SafelyQ and open \"Youtube\"",
      [ {
              text: "Cancel", onPress: () => {}, style: "cancel"},
          { text: "Yes", onPress: () =>  {
              Linking.openURL(video.url)
          }}
      ])
  }

  return (
    <ScrollView horizontal style={{paddingBottom:0}} showsHorizontalScrollIndicator={false}>
      {media?.map((video, index) => {
        const lastIndex = String(video.url).lastIndexOf('=') + 1;
        const videoId = String(video.url).slice(lastIndex, video.url.lenght);
        return (
          <TouchableOpacity key={index} style={{alignItems: 'center', justifyContent:'center', height: 90, width:180}}
          onPress={() => {openYoutube(video)}}
          >
            <View style={{marginRight:10, position: 'absolute',}}>
              <Image
                style={{height: 90 , width: 165, borderRadius:4}}
                source={{uri: 'https://img.youtube.com/vi/'+videoId+ '/hqdefault.jpg'}} 
              />
            </View>
            <View style={{flex: 0, justifyContent:'center', marginTop: 0}}>
                <ICON.AntDesign name="play" size={24} color="white"  style={{opacity: .8,}} />
              </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
