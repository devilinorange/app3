import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Message,
  Loader,
  Segment,
  Button,
  Icon,
} from 'semantic-ui-react';

import dateFormat from '../../utils/dateFormat';

const ReadNewsPage = (props) => {
  const {
    userId,
    news,
    match,
    isLoading,
    eMessage,
    fetchSingleNews,
  } = props;

  const { id } = match.params;

  useEffect(() => {
    fetchSingleNews(id);
  }, [id, fetchSingleNews]);

  return (
    <>
      {eMessage && <Message error>{eMessage}</Message>}
      {
        isLoading || !news._id ? (
          <Loader active content="Loading..." />
        ) : (
          <Segment>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Header>{news.title}</Item.Header>
                  <Item.Meta>
                    {news.creator.displayName}
                    /
                    {dateFormat(news.createDate)}
                  </Item.Meta>
                  <Item.Description>
                    {news.content}
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
            {userId === news.creator._id && (
              <>
                <Button icon labelPosition="left" primary style={{ width: '120px' }}>
                  <Icon name="edit" />
                  Edit
                </Button>
                <Button icon labelPosition="left" style={{ width: '120px' }}>
                  <Icon name="trash" />
                  Delete
                </Button>
              </>
            )}
          </Segment>
        )
      }
    </>
  );
};

ReadNewsPage.propTypes = {
  userId: PropTypes.string.isRequired,
  news: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
  eMessage: PropTypes.string.isRequired,
  fetchSingleNews: PropTypes.func.isRequired,
};

export default ReadNewsPage;
