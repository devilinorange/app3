import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuBar = () => {
  return (
    <Menu size="huge">
      <Menu.Item name="home" />
      <Menu.Item name="Login" position="right" />
    </Menu>
  );
};

export default MenuBar;
