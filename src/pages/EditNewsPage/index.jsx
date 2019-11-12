import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Segment, Form } from 'semantic-ui-react';

const EditNewsPage = () => {
  const {}

  const [title, setTitle] = useState()
  return (
    <Segment>
      <Form>
        <Form.Input
          type="text"
          value={title}
        />
      </Form>
    </Segment>
  )
}
