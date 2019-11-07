import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Image,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import SignInPortal from './components/SignInPortal/SignInPortalContainer/index';

const MenuBar = (props) => {
  const [openPortal, setOpenPortal] = useState(false);

  const {
    userInfo,
  } = props;

  const closePortalHandler = () => setOpenPortal(false);
  const openPortalHandler = () => setOpenPortal(true);

  return (
    <Menu size="small">
      <Menu.Item as={NavLink} exact to="/" name="home" />
      <Menu.Menu position="right" style={{ height: '50px' }}>
        {!userInfo ? (
          <>
            <Menu.Item onClick={openPortalHandler} name="sign in" />
            <SignInPortal closePortalHandler={closePortalHandler} openPortal={openPortal} />
          </>
        ) : (
          <>
            <Menu.Item>
              {userInfo.avatarUrl && <Image src={userInfo.avatarUrl} avatar />}
              {userInfo.name}
            </Menu.Item>
            <Menu.Item name="sign out" />
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

MenuBar.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.any),
};

MenuBar.defaultProps = {
  userInfo: null,
};

export default MenuBar;
