import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Message } from 'semantic-ui-react';

const FormAddNews = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const {
    isLoading,
    eMessage,
    addSingleNews,
    token,
    fetchNews,
  } = props;

  const changeHandler = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'text') {
      setText(e.target.value);
    }
  };

  const submitHandler = () => {
    addSingleNews(title, text, token, fetchNews);
  };

  return (
    <Segment>
      <Form onSubmit={submitHandler}>
        <Form.Input
          value={title}
          name="title"
          type="text"
          placeholder="Заголовок новости..."
          onChange={changeHandler}
        />
        <Form.TextArea
          value={text}
          name="text"
          placeholder="Текст новости..."
          onChange={changeHandler}
        />
        <Form.Button content="Создать Новость" loading={isLoading} />
        {eMessage && <Message negative>{eMessage}</Message>}
      </Form>
    </Segment>
  );
};

FormAddNews.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  eMessage: PropTypes.string.isRequired,
  addSingleNews: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  fetchNews: PropTypes.func.isRequired,
};

export default FormAddNews;
