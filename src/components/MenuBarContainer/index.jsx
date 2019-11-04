import { connect } from 'react-redux';

import MenuBar from '../MenuBar/index';
import { signIn } from '../../store/session/actions';

const mapStateToProps = (state) => ({
  token: state.session.token,
  isLoading: state.session.isLoading,
  eMessage: state.session.eMessage,
});

const mapDispatchToProps = {
  signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
