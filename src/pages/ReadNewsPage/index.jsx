import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Message,
  Loader,
  Segment,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';

import dateFormat from '../../utils/dateFormat';
import DeleteConfirm from '../../components/DeleteConfirm/index';

const ReadNewsPage = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [needRedirect, setNeedRedirect] = useState(false);

  const {
    userId,
    news,
    match,
    isLoading,
    eMessage,
    fetchSingleNews,
    deleteSingleNews,
    token,
    fetchNews,
  } = props;

  const { id } = match.params;

  useEffect(() => {
    fetchSingleNews(id);
  }, [id, fetchSingleNews]);

  const closeConfirm = () => {
    setShowConfirm(false);
  };

  const accessConfrim = () => {
    deleteSingleNews(news._id, token, fetchNews);
    closeConfirm();
    setNeedRedirect(true);
  };

  if (needRedirect) {
    return <Redirect to="/" />;
  }

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
                <Button as={Link} to={`/news/${news._id}/edit`} icon labelPosition="left" primary style={{ width: '120px' }}>
                  <Icon name="edit" />
                  Edit
                </Button>
                <Button icon labelPosition="left" style={{ width: '120px' }} onClick={() => setShowConfirm(true)}>
                  <Icon name="trash" />
                  Delete
                </Button>
              </>
            )}
            <DeleteConfirm open={showConfirm} close={closeConfirm} onConfirm={accessConfrim} />
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
  deleteSingleNews: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  fetchNews: PropTypes.func.isRequired,
};

export default ReadNewsPage;
