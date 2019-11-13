import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Message,
  Loader,
  Button,
  Icon,
} from 'semantic-ui-react';

import NewsContainer from './components/News/container/index';
import FormAddNewsContainer from './components/FormAddNews/container/index';

const NewsPage = (props) => {
  const [showForm, setShowForm] = useState(false);

  const {
    userId,
    news,
    isLoading,
    eMessage,
    fetchNews,
  } = props;

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <>
      {userId && (
        <>
          <Button icon labelPosition="left" onClick={() => setShowForm(!showForm)}>
            <Icon name={showForm ? 'close' : 'add'} />
            {showForm ? 'Close' : 'Add Feed'}
          </Button>
          {showForm && <FormAddNewsContainer />}
        </>
      )}
      {eMessage && <Message negative>{eMessage}</Message>}
      {
        isLoading || !news ? (
          <Loader active content="...Loading" />
        ) : (
          <Item.Group divided>
            {news.map((el) => (
              <NewsContainer
                key={el._id}
                news={el}
                editable={el.creator._id === userId}
              />
            ))}
          </Item.Group>
        )
      }
    </>
  );
};

NewsPage.propTypes = {
  userId: PropTypes.string.isRequired,
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  eMessage: PropTypes.string.isRequired,
  fetchNews: PropTypes.func.isRequired,
};

export default NewsPage;
