import * as type from './actionTypes';

const actionFetchSingleNewsRequest = {
  type: type.FETCH_SINGLE_NEWS_REQUEST,
};

const actionFetchSingleNewsResponse = (news) => ({
  type: type.FETCH_SINGLE_NEWS_RESPONSE,
  payload: news,
});

const actionFetchSingleNewsFailed = (error) => ({
  type: type.FETCH_SINGLE_NEWS_FAILED,
  payload: error,
});

const fetchSingleNews = (id) => (
  (dispatch) => {
    dispatch(actionFetchSingleNewsRequest);
    return fetch(`http://127.0.0.1:5000/api/v1/feeds/${id}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.feed) {
          dispatch(actionFetchSingleNewsResponse(json.feed));
        } else {
          dispatch(actionFetchSingleNewsFailed(json.error));
        }
      })
      .catch((e) => dispatch(actionFetchSingleNewsFailed(e.message)));
  }
);

export default fetchSingleNews;
