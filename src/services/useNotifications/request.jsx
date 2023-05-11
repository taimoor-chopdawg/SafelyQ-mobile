import gql from 'graphql-tag';

export const GET_USER_NOTIFICATIONS = gql`
  query all {
    getUserNotifications {
      userNotifications {
        id
        sourceId
        notificationType
        notificationChannel
        subject
        content
        isRead
        isViewed
        createdTime
        sentChannels
        correlationKey
        business {
          id
          name
          timeZone
          details {
            offset
          }
          picture {
            id
            path
          }
        }
        appointment {
          id
          status
          startTime
          business {
            id
            name
            timeZone
            details {
              offset
            }
            picture {
              id
              path
            }
          }
        }
      }
    }
  }
`;

