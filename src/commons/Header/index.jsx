import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {useAppTheme} from '@context';
import {Text} from '@core-ui';
import {IMG, SCREEN} from '@constants';
import {styles} from './styles';

export const Header = () => {
  const {theme} = useAppTheme();
  const navigation = useNavigation()

  return (
    <View style={styles({theme}).container}>
      <Image source={IMG.SafelyQ} style={styles().imageSize} />
      <TouchableOpacity style={styles().row} onPress={() => navigation.navigate(SCREEN.ROOT, {screen: SCREEN.SETTINGS, initial: false})}>
        <Text style={styles().text}>Taimoor Hassan</Text>
        <View style={styles({theme}).imageContainer}>
          <Image source={IMG.Logo} style={styles().profileImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
