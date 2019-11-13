import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import dateFormat from '../../../../utils/dateFormat';
import DeleteConfirm from '../../../../components/DeleteConfirm/index';

const News = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    news,
    editable,
    token,
    deleteSingleNews,
    fetchNews,
  } = props;

  const closeConfirm = () => {
    setShowConfirm(false);
  };

  const acceptConfirm = () => {
    deleteSingleNews(news._id, token, fetchNews);
    closeConfirm();
  };

  return (
    <Item>
      <Item.Content>
        <Item.Header as={Link} to={`/news/${news._id}`}>{news.title}</Item.Header>
        <Item.Meta>
          {news.creator.displayName}
          /
          {dateFormat(news.createDate)}
        </Item.Meta>
        <Item.Description>
          {news.content.length > 200 ? `${news.content.substring(0, 200)}...` : news.content}
        </Item.Description>
        {editable && (
          <Item.Extra>
            <Button as={Link} to={`/news/${news._id}/edit`} icon labelPosition="left" primary size="mini">
              <Icon name="edit" />
              Edit
            </Button>
            <Button icon labelPosition="left" size="mini" onClick={() => setShowConfirm(true)}>
              <Icon name="trash" />
              Delete
            </Button>
          </Item.Extra>
        )}
      </Item.Content>
      <DeleteConfirm
        open={showConfirm}
        close={closeConfirm}
        onConfirm={acceptConfirm}
      />
    </Item>
  );
};

News.propTypes = {
  news: PropTypes.objectOf(PropTypes.any).isRequired,
  editable: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  deleteSingleNews: PropTypes.func.isRequired,
  fetchNews: PropTypes.func.isRequired,
};

export default News;
