import * as type from './actionTypes';

const actionFetchNewsRequest = ({
  type: type.FETCH_NEWS_REQUEST,
});

const actionFetchNewsResponse = (data) => ({
  type: type.FETCH_NEWS_RESPONSE,
  payload: data,
});

const actionFetchNewsFailed = (error) => ({
  type: type.FETCH_NEWS_FAILED,
  payload: error,
});

const fetchNews = () => (
  (dispatch) => {
    dispatch(actionFetchNewsRequest);
    return fetch('http://127.0.0.1:5000/api/v1/feeds')
      .then((response) => response.json())
      .then((json) => {
        if (!json.error) {
          dispatch(actionFetchNewsResponse(json.feeds));
        } else {
          dispatch(actionFetchNewsFailed(json.error));
        }
      })
      .catch((e) => dispatch(actionFetchNewsFailed(e.message)));
  }
);

export default fetchNews;
