import {StyleSheet} from 'react-native';
import {COLOR} from '@constants';

export const styles = ({theme} = {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme ? COLOR.lightMode : COLOR.darkMode,
      height: 48,
    },
    imageSize: {
      width: 100,
      height: 30,
      resizeMode: 'cover',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginRight: 5,
    },
    imageContainer: {
      width: 30,
      height: 30,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme ? COLOR.darkMode : COLOR.lightMode,
    },
    profileImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });
