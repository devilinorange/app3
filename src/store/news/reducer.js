import * as type from './actionTypes';

const initialState = {
  isLoading: false,
  eMessage: '',
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
        eMessage: '',
      };
    case type.FETCH_NEWS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        news: action.payload,
      };
    case type.FETCH_NEWS_FAILED:
      return {
        ...state,
        isLoading: false,
        eMessage: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
