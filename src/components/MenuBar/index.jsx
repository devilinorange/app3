import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Image,
  Button,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import SignInPortal from './components/SignInPortal/SignInPortalContainer/index';

const MenuBar = (props) => {
  const [openPortal, setOpenPortal] = useState(false);

  const {
    userInfo,
    isLoading,
    actionSignOut,
  } = props;

  useEffect(() => setOpenPortal(false), [userInfo]);

  const closePortalHandler = () => setOpenPortal(false);
  const openPortalHandler = () => setOpenPortal(true);

  return (
    <Menu size="small">
      <Menu.Item as={NavLink} exact to="/" name="home" />
      <Menu.Menu position="right" style={{ height: '50px' }}>
        {!userInfo ? (
          <>
            <Menu.Item as={Button} onClick={openPortalHandler} name="sign in" loading={isLoading} />
            <SignInPortal closePortalHandler={closePortalHandler} openPortal={openPortal} />
          </>
        ) : (
          <>
            <Menu.Item>
              {userInfo.avatarUrl && <Image src={userInfo.avatarUrl} avatar />}
              {userInfo.name}
            </Menu.Item>
            <Menu.Item onClick={actionSignOut} name="sign out" />
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

MenuBar.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.any),
  actionSignOut: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

MenuBar.defaultProps = {
  userInfo: null,
};

export default MenuBar;
