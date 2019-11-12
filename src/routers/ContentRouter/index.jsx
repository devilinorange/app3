import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NewsPageContainer from '../../pages/NewsPage/container/index';
import ReadNewsPageContainer from '../../pages/ReadNewsPage/container/index';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" component={NewsPageContainer} />
    <Route path="/news/:id" component={ReadNewsPageContainer} />
    <Route path="/news/:id/edit" component={EditNewsPageContainer} />
  </Switch>
);

export default ContentRouter;
