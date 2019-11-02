import React from 'react';
import { Container, Item } from 'semantic-ui-react';

import News from '../News/index';
import MenuBar from '../MenuBar/index';

const App = () => (
  <Container text>
    <MenuBar />
    <Item.Group divided relaxed>
      <News title="Warning" author="auth" date={new Date().toDateString()} text="Lorem ipsum dolor sit amet.">Hello World!!!</News>
    </Item.Group>
  </Container>
);

export default App;
