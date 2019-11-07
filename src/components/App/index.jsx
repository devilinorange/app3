import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';

import MenuBarContainer from '../MenuBar/MenuBarContainer/index';
import ContentRouter from '../../routers/ContentRouter/index';

const App = () => {
  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      });
    });
  });

  return (
    <Container text>
      <MenuBarContainer />
      <ContentRouter />
    </Container>
  );
};

export default App;
