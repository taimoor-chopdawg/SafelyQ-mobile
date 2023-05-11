import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Communications from 'react-native-communications';
import {IMG, ICON, COLOR} from '@constants';
import {SafeAreaView, Header, Text} from '@core-ui';
import {useSettings} from '@services'
import {Youtube} from './components'

export const AboutUs = () => {
  const TITLEFONT = 18
  const SUBTEXTFONT = 16
  const PARAGRAPHFONT = 14

  const {aboutUs} = useSettings();

  return (
    <SafeAreaView>
      <Header title="About us" />
      <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{width: 120, height: 140, alignItems:'center', flex:1}}>
          <Image source={IMG.Logo} style={{width: 120, height: 140}} />
        </View>
      </View>
      <View style={{ alignItems:'center'}}>
          <Text style={{fontSize: TITLEFONT, fontWeight: 'bold'}}>
            {aboutUs?.title}
          </Text>
        </View>

      <View style={{marginHorizontal: 7}}>
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: PARAGRAPHFONT, textAlign: 'justify'}}>
            {aboutUs?.goal}
          </Text>
        </View>

        <View style={{marginTop: 10, marginBottom:0}}>
          <Text
            style={{
              fontSize: SUBTEXTFONT,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {aboutUs?.setupList?.title}
          </Text>
        </View>

        {aboutUs?.setupList?.options?.map((op, index) => (
          <View key={index} style={{flexDirection:'row'}}>
            <ICON.Feather name="check" size={15} style={{color: COLOR.primaryLight , marginTop:2}} />
            <Text style={{fontSize: PARAGRAPHFONT, textAlign: 'justify', marginLeft: 5}}>{op}</Text>
          </View>
        ))}

        <View style={{marginTop: 10, marginBottom:10}}>
          <Text
            style={{
              fontSize: SUBTEXTFONT,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            How does it work?
          </Text>
        </View>
        <Youtube media={aboutUs?.media} />

        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: SUBTEXTFONT,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            For state, counties, and cities
          </Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize: PARAGRAPHFONT, textAlign: 'justify'}}>
            {aboutUs?.description?.pg1}
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: PARAGRAPHFONT, textAlign: 'justify'}}>
            {aboutUs?.description?.pg2}
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: PARAGRAPHFONT, textAlign: 'justify'}}>
            {aboutUs?.description?.pg3}
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{fontSize: PARAGRAPHFONT, textAlign: 'justify'}}>
            {aboutUs?.description?.pg4}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            Communications.email(
              [
                userInfo !== null ? userInfo?.email : '',
                aboutUs?.footer?.email,
              ],
              null,
              null,
              'Question Regarding SafelyQ',
              '',
            )
          }
          style={{marginTop: 10, flexDirection: 'row', justifyContent:'center',}}>
          <Text
            style={{
              fontSize: SUBTEXTFONT,
              fontWeight: 'bold',
              textAlign: 'center',
              color:COLOR.primaryLight
            }}>
            {aboutUs?.footer?.text} {aboutUs?.footer?.email}
          </Text>
          <View style={{marginLeft: 5, justifyContent:'center', marginTop:2}}>
            <ICON.Feather name="mail" size={15} style={{color: COLOR.primaryLight}} />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={{marginTop: 15, color: 'gray', textAlign: 'center'}}>
        SafelyQ.com 2021. All rights reserved
      </Text>

      <View style={{marginBottom: 20}} />
      </ScrollView>
    </SafeAreaView>
  );
};


 const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});