import gql from 'graphql-tag';

export const GET_CURRENT_USER = gql`
  query all {
    getUser {
      isSuccess
      errorMessage
      user {
        id
        name
        email
        emailConfirmed
        firstName
        lastName
        phoneNumber
        phoneNumberConfirmed
        createdTime
      }
    }
  }
`;

export const DELETE_CURRENT_USER = gql`
  mutation {
    deleteMyAccount {
      isAccountDeleted
      message
    }
  }
`;
