import { connect } from 'react-redux';

import MenuBar from '../../components/MenuBar/index';
import { signInWithGoogle, fetchUserInfoGoogle } from '../../store/session/actions';

const mapStateToProps = (state) => ({
  userInfo: state.session.userInfo,
  isLoading: state.session.isLoading,
  eMessage: state.session.eMessage,
});

const mapDispatchToProps = {
  signInWithGoogle,
  fetchUserInfoGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
