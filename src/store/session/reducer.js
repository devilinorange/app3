import { SIGN_IN_REQUEST, SIGN_IN_RESPONSE, SIGN_IN_FAILED } from './actions';

const initialState = {
  token: '',
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
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        eMessage: action.payload.eMessage,
      };
    default:
      return state;
  }
};

export default sessionReducer;
