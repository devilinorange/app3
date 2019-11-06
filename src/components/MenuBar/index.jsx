import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const MenuBar = (props) => {
  const {
    userInfo,
    isLoading,
    eMessage,
    signInWithGoogle,
    fetchUserInfoGoogle,
  } = props;

  const signInHandler = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn()
      .then((GoogleUser) => {
        signInWithGoogle(GoogleUser.getAuthResponse().id_token);
        const profile = GoogleUser.getBasicProfile();
        fetchUserInfoGoogle(profile.getName(), profile.getImageUrl());
      })
      .catch(() => console.log('error'));
  };

  return (
    <Menu size="huge">
      <Menu.Item as={NavLink} exact to="/" name="home" />
      <Menu.Item onClick={signInHandler} position="right" name="login" />
      {userInfo && <p>{userInfo.name}</p>}
    </Menu>
  );
};

MenuBar.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.any),
  isLoading: PropTypes.bool.isRequired,
  eMessage: PropTypes.string.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  fetchUserInfoGoogle: PropTypes.func.isRequired,
};

MenuBar.defaultProps = {
  userInfo: null,
};

export default MenuBar;
