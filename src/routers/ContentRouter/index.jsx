import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NewsPageContainer from '../../pages/NewsPage/container/index';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" component={NewsPageContainer} />
  </Switch>
);

export default ContentRouter;
