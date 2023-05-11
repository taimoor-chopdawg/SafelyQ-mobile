const config = {
    screens: {
      Home:'Home',
      AppointmentDetails: {
        path: 'AppointmentDetails/:businessId',
        parse: {
          id: (businessId) => `${businessId}`,
        },
      },
      Notification: {
        path: 'Notification/:notificationId',
        parse: {
          id: (notificationId) => `${notificationId}`,
        },
      },
      ConfirmationScreen: {
        path: 'ConfirmationScreen/:appointmentId',
        parse: {
          id: (appointmentId) => `${appointmentId}`,
        },
      },
    },
  };
  
   export const linking = {
    prefixes: ['app://safelyq'],
    //prefixes: ['https://safelyq.dev','demo://app'],
    config,
  };