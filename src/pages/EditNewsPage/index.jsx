import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Form,
  Loader,
  Message,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const EditNewsPage = (props) => {
  const {
    token,
    match,
    news,
    isLoading,
    eMessage,
    fetchSingleNews,
    fetchNews,
    changeSingleNews,
    changeIsLoading,
    changeErrorMessage,
  } = props;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [needRedirect, setNeedRedirect] = useState(false);

  const { id } = match.params;

  useEffect(() => {
    fetchSingleNews(id);
  }, [id, fetchSingleNews]);

  useEffect(() => {
    setTitle(news.title || '');
    setContent(news.content || '');
  }, [news]);

  const changeHandler = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'content') {
      setContent(e.target.value);
    }
  };

  const submitHandler = () => {
    changeSingleNews(news._id, token, title, content, fetchNews);
    setNeedRedirect(true);
  };

  if (needRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <Segment>
      {eMessage && <Message negative>{eMessage}</Message>}
      {isLoading || !news ? (
        <Loader active content="...Loading" />
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Input
            type="text"
            name="title"
            value={title}
            onChange={changeHandler}
          />
          <Form.TextArea
            name="content"
            value={content}
            onChange={changeHandler}
          />
          <Form.Button content="Ok" loading={changeIsLoading} />
          {changeErrorMessage && <Message negative>{changeErrorMessage}</Message>}
        </Form>
      )}
    </Segment>
  );
};

EditNewsPage.propTypes = {
  token: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  eMessage: PropTypes.string.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  news: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchSingleNews: PropTypes.func.isRequired,
  changeSingleNews: PropTypes.func.isRequired,
  changeIsLoading: PropTypes.bool.isRequired,
  changeErrorMessage: PropTypes.string.isRequired,
  fetchNews: PropTypes.func.isRequired,
};

export default EditNewsPage;
