import React from 'react';
import { Item } from 'semantic-ui-react';
import News from '../News/index';

const App = () => (
  <Item.Group divided relaxed>
    <News title="Warning" author="auth" date={new Date().toDateString()} text="Lorem ipsum dolor sit amet.">Hello World!!!</News>
  </Item.Group>
);

export default App;
