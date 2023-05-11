import gql from 'graphql-tag';

export const GET_NOTICATION_COUNT = gql`
  query isProfileComplete {
    isProfileComplete {
      unviewedCount
    }
  }
`;

export const GET_MESSAGE_COUNT = gql`
  query all {
    getUser {
      isSuccess
      errorMessage
      user {
        id
        name
        email
        conversationsSummary {
          unreadCount
        }
      }
    }
  }
`;

export const MARK_NOTIFICATION_READ = gql`
  mutation MarkNotificationAsRead($correlationKey: String) {
    markNotificationAsRead(correlationKey: $correlationKey) {
      errorMessage
      isSuccess
    }
  }
`;

export const MARK_NOTIFICATION_ISVIEWED = gql`
  mutation {
    markNotificationsAsViewed(updateAdmin: true) {
      errorMessage
      isSuccess
    }
  }
`;
