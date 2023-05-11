import gql from 'graphql-tag';

export const GET_USER_PROFILE = gql`
  query all {
    getUserProfile {
      user {
        id
        email
        emailConfirmed
        firstName
        lastName
        phoneNumber
        claimedPhoneNumber
        phoneNumberConfirmed
        userPreferences {
          allowEmail
          allowSms
          allowWhatsApp
        }
      }
      hasSemiAuthAccount
      isVerficationCodeSent
      error
    }
  }
`;

export const SAVE_USER_PROFILE = gql`
  mutation SaveUserProfile($userProfileInput: UserProfileInput!) {
    saveUserProfile(userProfileInput: $userProfileInput) {
      hasSemiAuthAccount
      isVerficationCodeSent
      isUpdated
      error
    }
  }
`;

export const SEND_VERIFICATION_CODE = gql`
  mutation all {
    sendVerificationCode {
      isSuccess
      error
    }
  }
`;

export const CONFIRM_VERIFICATION_CODE = gql`
  mutation all($code: String!) {
    confirmVerificationCode(code: $code) {
      isSuccess
      isPhoneNumberUpdated
      error
    }
  }
`;

export const DELETE_ACCOUNT = gql`
  mutation {
    deleteMyAccount {
      isAccountDeleted
      message
    }
  }
`;


export const GET_ABOUT_US_INFO = gql`
  query GetAboutUsInfo {
    getAboutUsPageInfo {
      isSuccess
      errorMessage
      aboutUs {
        title
        goal
        description {
          pg1
          pg2
          pg3
          pg4
        }
        setupList {
          title
          options
        }
        media {
          title
          url
        }
        footer {
          text
          email
        }
      }
    }
  }
`;
