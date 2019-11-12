import * as type from './actionTypes';

const initialState = {
  news: {},
  isLoading: false,
  eMessage: '',
  addIsLoading: false,
  addErrorMessage: '',
  deleteIsLoading: false,
  deleteErrorMessage: '',
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
    case type.ADD_SINGLE_NEWS_REQUEST:
      return {
        ...state,
        addIsLoading: true,
        addErrorMessage: '',
      };
    case type.ADD_SINGLE_NEWS_RESPONSE:
      return {
        ...state,
        addIsLoading: false,
      };
    case type.ADD_SINGLE_NEWS_FAILED:
      return {
        ...state,
        addIsLoading: false,
        addErrorMessage: action.payload,
      };
    case type.DELETE_SINGLE_NEWS_REQUEST:
      return {
        ...state,
        deleteIsLoading: true,
        deleteErrorMessage: '',
      };
    case type.DELETE_SINGLE_NEWS_RESPONSE:
      return {
        ...state,
        deleteIsLoading: false,
      };
    case type.DELETE_SINGLE_NEWS_FAILED:
      return {
        ...state,
        deleteIsLoading: false,
        deleteErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default singleNewsReducer;
