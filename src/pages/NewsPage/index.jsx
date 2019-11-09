import React, { useEffect } from 'react';
import { Item } from 'semantic-ui-react';

import News from '../../components/News/index';

const NewsPage = () => {
  useEffect(() => null);
  return (
    <Item.Group>
      <News title="lorem" author="Lorem ipsum." date={new Date().toDateString()} text="Lorem ipsum dolor sit amet." />
    </Item.Group>
  );
};

export default NewsPage;
