import {StyleSheet} from 'react-native';

export const styles = ({disabled, width, height, color, isBorder} = {}) =>
  StyleSheet.create({
    spacing: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: disabled ? 'lightgray' : color ? color : '#8946E5',
      width: width ? width : '100%',
      height: height ? height : 45,
      borderRadius: 16,
      borderWidth: isBorder ? 1 : 0,
      borderColor: '#8946E5',
    },
    text: {
      color: isBorder ? 'black' : 'white',
      fontWeight: 'bold',
    },
  });
