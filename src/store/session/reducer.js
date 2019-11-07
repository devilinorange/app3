import {
  SIGN_IN_REQUEST,
  SIGN_IN_RESPONSE,
  SIGN_IN_FAILED,
  SIGN_OUT,
  USER_INFO_GOOGLE,
} from './actions';

const initialState = {
  token: '',
  id: '',
  userInfo: null,
  isLoading: false,
  eMessage: '',
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        eMessage: action.payload.eMessage,
      };
    case SIGN_IN_RESPONSE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        eMessage: action.payload.eMessage,
        token: action.payload.token,
        id: action.payload.id,
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        eMessage: action.payload.eMessage,
      };
    case USER_INFO_GOOGLE:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default sessionReducer;
