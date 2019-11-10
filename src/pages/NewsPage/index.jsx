import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Item, Message, Loader } from 'semantic-ui-react';

import News from './components/News/index';

const NewsPage = (props) => {
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
      {eMessage && <Message error>{eMessage}</Message>}
      {
        isLoading || !news ? (
          <Loader active content="...Loading" />
        ) : (
          <Item.Group divided>
            {news.map((el) => (
              <News
                key={el._id}
                newsId={el._id}
                title={el.title}
                author={el.creator.displayName}
                date={el.createDate}
                text={el.content}
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
