import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import dateFormat from '../../../../utils/dateFormat';

const News = (props) => {
  const {
    newsId,
    title,
    author,
    date,
    text,
    editable,
  } = props;

  return (
    <Item>
      <Item.Content>
        <Item.Header as={Link} to={`/news/${newsId}`}>{title}</Item.Header>
        <Item.Meta>
          {author}
          /
          {dateFormat(date)}
        </Item.Meta>
        <Item.Description>
          {text.length > 200 ? `${text.substring(0, 200)}...` : text}
        </Item.Description>
        {editable && (
          <Item.Extra>
            <Button icon labelPosition="left" primary size="mini">
              <Icon name="edit" />
              Edit
            </Button>
            <Button icon labelPosition="left" size="mini">
              <Icon name="trash" />
              Delete
            </Button>
          </Item.Extra>
        )}
      </Item.Content>
    </Item>
  );
};

News.propTypes = {
  newsId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
};

export default News;
