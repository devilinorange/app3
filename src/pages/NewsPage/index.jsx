import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Item, Message, Loader } from 'semantic-ui-react';

import News from './components/News/index';

const NewsPage = (props) => {
  const {
    news,
    isLoading,
    eMessage,
    fetchNews,
  } = props;

  useEffect(() => {
    fetchNews();
  }, []);
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
                title={el.title}
                author={el.creator.displayName}
                date={el.createDate}
                text={el.content}
              />
            ))}
          </Item.Group>
        )
      }
    </>
  );
};

NewsPage.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  eMessage: PropTypes.string.isRequired,
  fetchNews: PropTypes.func.isRequired,
};

export default NewsPage;
