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

const actionAddSingleNewsRequest = {
  type: type.ADD_SINGLE_NEWS_REQUEST,
};

const actionAddSingleNewsResponse = {
  type: type.ADD_SINGLE_NEWS_RESPONSE,
};

const actionAddSingleNewsFailed = (error) => ({
  type: type.ADD_SINGLE_NEWS_FAILED,
  payload: error,
});

export const fetchSingleNews = (id) => (
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

export const addSingleNews = (title, content, token, fetchNews) => (
  (dispatch) => {
    dispatch(actionAddSingleNewsRequest);
    return fetch('http://127.0.0.1:5000/api/v1/feeds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.feed) {
          dispatch(actionAddSingleNewsResponse);
          fetchNews();
        } else {
          dispatch(actionAddSingleNewsFailed(json.error));
        }
      })
      .catch((e) => dispatch(actionAddSingleNewsFailed(e.message)));
  }
);
