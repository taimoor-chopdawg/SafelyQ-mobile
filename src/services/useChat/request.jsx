import gql from 'graphql-tag';

export const GET_BUSINESS_CONVERSATION_LIST = gql`
  query all {
    getUser {
      isSuccess
      errorMessage
      user {
        id
        name
        email
        conversations {
          business {
            id
            name
            messaging {
              messagingAllowed
              consumerResponseAllowed
              consumerAttachmentsAllowed
            }
            picture {
              id
              path
            }
            timeZone
          }
          unreadCount
          recentMessageTime
          recentMessages {
            id
            isRead
            message {
              id
              commentText
              createdTime
            }
          }
        }
      }
    }
  }
`;