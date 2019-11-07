/*  eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { signInWithGoogle, fetchUserInfoGoogle } from '../../../../../store/session/actions';

import SignInPortal from '../index';


const mapDispatchToProps = {
  signInWithGoogle,
  fetchUserInfoGoogle,
};

const SignInPortalContainer = (props) => (
  <SignInPortal {...props} />
);

export default connect(null, mapDispatchToProps)(SignInPortalContainer);
