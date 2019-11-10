import React from 'react';
import PropTypes from 'prop-types';
import {
  Portal,
  Segment,
  Button,
  Icon,
} from 'semantic-ui-react';

const SignInPortal = (props) => {
  const {
    openPortal,
    closePortalHandler,
    signInWithGoogle,
    fetchUserInfoGoogle,
    actionSignInFailed,
  } = props;

  const gSignInHandler = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn()
      .then((GoogleUser) => {
        signInWithGoogle(GoogleUser.getAuthResponse().id_token);
        const profile = GoogleUser.getBasicProfile();
        fetchUserInfoGoogle(profile.getName(), profile.getImageUrl());
      })
      .catch((e) => actionSignInFailed(e.message));
  };

  return (
    <Portal open={openPortal}>
      <Segment
        style={{
          left: '45%',
          position: 'absolute',
          top: '40%',
          zIndex: 1000,
          minWidth: '250px',
        }}
        textAlign="center"
      >
        <Button onClick={gSignInHandler} icon labelPosition="left" fluid>
          <Icon name="google" />
          Sign in With Google
        </Button>
        <br />
        <Button
          content="Close"
          onClick={closePortalHandler}
          negative
          fluid
        />
      </Segment>
    </Portal>
  );
};

SignInPortal.propTypes = {
  openPortal: PropTypes.bool.isRequired,
  closePortalHandler: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  fetchUserInfoGoogle: PropTypes.func.isRequired,
  actionSignInFailed: PropTypes.func.isRequired,
};

export default SignInPortal;
