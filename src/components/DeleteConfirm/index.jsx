import React from 'react';
import PropTypes from 'prop-types';
import { Confirm } from 'semantic-ui-react';

const DeleteConfirm = (props) => {
  const {
    open,
    close,
    onConfirm,
  } = props;

  return (
    <Confirm
      open={open}
      onCancel={close}
      onConfirm={onConfirm}
    />
  );
};

DeleteConfirm.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteConfirm;
