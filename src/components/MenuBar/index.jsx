import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const MenuBar = (props) => {
  const {
    token,
    isLoading,
    eMessage,
    signIn,
  } = props;

  const signInHandler = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn()
      .then((user) => {
        signIn(user.getAuthResponse().id_token);
      })
      .catch(() => console.log('error'));
  };

  return (
    <Menu size="huge">
      <Menu.Item as={NavLink} exact to="/" name="home" />
      <Menu.Item onClick={signInHandler} position="right" name="login" />
    </Menu>
  );
};

MenuBar.propTypes = {
  token: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  eMessage: PropTypes.string.isRequired,
  signIn: PropTypes.func.isRequired,
};

export default MenuBar;
