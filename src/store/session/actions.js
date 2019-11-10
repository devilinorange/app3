export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_RESPONSE = 'SIGN_IN_RESPONSE';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const SIGN_OUT = 'SIGN_OUT';
export const USER_INFO_GOOGLE = 'USER_INFO_GOOGLE';
export const SIGN_IN_FROM_LOCAL_STORAGE = 'SIGN_IN_FROM_LOCAL_STORAGE';

const jwtDecode = require('jwt-decode');

const actionSignInRequest = {
  type: SIGN_IN_REQUEST,
  payload: {
    isLoading: true,
    eMessage: '',
  },
};

const actionSignInResponse = (token, id) => {
  localStorage.setItem('token', token);
  localStorage.setItem('id', id);
  return {
    type: SIGN_IN_RESPONSE,
    payload: {
      token,
      id,
      isLoading: false,
      eMessage: '',
    },
  };
};

export const actionSignInFailed = (e) => ({
  type: SIGN_IN_FAILED,
  payload: {
    isLoading: false,
    eMessage: e,
  },
});

export const actionSignOut = () => {
  const GoogleAuth = window.gapi.auth2.getAuthInstance();
  if (GoogleAuth.currentUser.get().isSignedIn()) {
    GoogleAuth.signOut();
  }
  localStorage.clear();
  return { type: SIGN_OUT };
};

export const fetchUserInfoGoogle = (name, avatarUrl) => {
  localStorage.setItem('userInfo', JSON.stringify({ name, avatarUrl }));
  return {
    type: USER_INFO_GOOGLE,
    payload: {
      name,
      avatarUrl,
    },
  };
};

export const actionSignInFromStorage = (token, id, userInfo) => ({
  type: SIGN_IN_FROM_LOCAL_STORAGE,
  payload: {
    token,
    id,
    userInfo,
  },
});

export const signInWithGoogle = (token) => (
  (dispatch) => {
    dispatch(actionSignInRequest);
    return fetch('http://127.0.0.1:5000/api/v1/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.token) {
          dispatch(actionSignInResponse(json.token, jwtDecode(json.token).id));
        } else {
          dispatch(actionSignInFailed(json.error));
        }
      })
      .catch((e) => {
        dispatch(actionSignInFailed(e.message));
      });
  }
);
