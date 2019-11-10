import * as type from './actionTypes';

const initialState = {
  news: {},
  isLoading: false,
  eMessage: '',
};

const singleNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_SINGLE_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
        eMessage: '',
      };
    case type.FETCH_SINGLE_NEWS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        news: action.payload,
      };
    case type.FETCH_SINGLE_NEWS_FAILED:
      return {
        ...state,
        isLoading: false,
        eMessage: action.payload,
      };
    default:
      return state;
  }
};

export default singleNewsReducer;
