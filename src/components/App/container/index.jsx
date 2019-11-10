import { connect } from 'react-redux';

import { actionSignInFromStorage } from '../../../store/session/actions';
import App from '../index';

const mapDispatchToProps = {
  actionSignInFromStorage,
};

export default connect(null, mapDispatchToProps)(App);
