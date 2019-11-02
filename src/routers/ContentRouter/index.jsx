import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NewsPage from '../../pages/NewsPage/index';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" component={NewsPage} />
  </Switch>
);

export default ContentRouter;
