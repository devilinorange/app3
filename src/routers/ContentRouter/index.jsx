import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NewsPageContainer from '../../pages/NewsPage/container/index';
import ReadNewsPageContainer from '../../pages/ReadNewsPage/container/index';
import EditNewsPageContainer from '../../pages/EditNewsPage/container/index';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" component={NewsPageContainer} />
    <Route exact path="/news/:id" component={ReadNewsPageContainer} />
    <Route path="/news/:id/edit" component={EditNewsPageContainer} />
  </Switch>
);

export default ContentRouter;
