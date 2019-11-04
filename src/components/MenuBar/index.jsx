import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
  const signIn = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn()
      .then((user) => console.log(user.getAuthResponse().id_token));
  };
  return (
    <Menu size="huge">
      <Menu.Item as={NavLink} exact to="/" name="home" />
      <Menu.Item onClick={signIn} position="right" name="login" />
    </Menu>
  );
};

export default MenuBar;
