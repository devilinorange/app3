import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import MenuBarContainer from '../MenuBar/MenuBarContainer/index';
import ContentRouter from '../../routers/ContentRouter/index';

const App = (props) => {
  const { actionSignInFromStorage } = props;
  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      });
    });
    if (localStorage.length !== 0) {
      actionSignInFromStorage(
        localStorage.getItem('token'),
        localStorage.getItem('id'),
        JSON.parse(localStorage.getItem('userInfo')),
      );
    }
  }, [actionSignInFromStorage]);

  return (
    <Container text>
      <MenuBarContainer />
      <ContentRouter />
    </Container>
  );
};

App.propTypes = {
  actionSignInFromStorage: PropTypes.func.isRequired,
};

export default App;
