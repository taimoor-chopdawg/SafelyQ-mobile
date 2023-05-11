import {StyleSheet, Platform} from 'react-native';

export const styles = ({isRead} = {}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 100,
      borderRadius: 10,
      padding:5,
      marginTop: 5,
      backgroundColor: isRead ? 'white' : '#f4f7fe',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 6,
    },
    row: {
      flexDirection: 'row',
      padding: 5,
    },
    imageContainer: {
      width: 83,
      height: 83
    },
    imageSize: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
    detailsSection: {
      width: '70%',
    },
    nameText: {
      fontWeight: 'bold',
      paddingLeft: 5,
    },
    simpleText: {
      paddingLeft: 5,
      marginTop: Platform.OS === 'ios' ? 5 : 2.5,
    },
    timeSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: Platform.OS === 'ios' ? 5 : 2.5,
    },
    ratingText: {
      color: 'gray',
      fontSize: 12,
      textAlign: 'center',
    },
    favrIcon: {
      marginTop: -80,
    },
  });
