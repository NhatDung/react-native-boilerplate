import {Platform} from 'react-native';

export const ErrorField = {
  EMAIL_ALREADY: 'email',
  PHONE_ALREADY: 'phone',
};
export const ErrorCode = {
  WRONG_OTP: 'E0017',
};

export const LIMIT_ITEMS = 12;

export const KeyStorage = {
  KEY_SEARCH_HISTORY: 'search_history',
  USER: 'user',
  RECENT_SEARCH: 'recent_search',
};

export const IsIOS = Platform.OS === 'ios';

export const COMMENT_MIN_LENGTH = 12;
