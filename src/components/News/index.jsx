import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const News = (props) => {
  const {
    title,
    author,
    date,
    text,
  } = props;

  return (
    <Item>
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Item.Meta>
          {author}
          /
          {date}
        </Item.Meta>
        <Item.Description>{text}</Item.Description>
      </Item.Content>
    </Item>
  );
};

News.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default News;
