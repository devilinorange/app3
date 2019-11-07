import { connect } from 'react-redux';
import { actionSignOut } from '../../../store/session/actions';

import MenuBar from '../index';

const mapStateToProps = (state) => ({
  userInfo: state.session.userInfo,
  isLoading: state.session.isLoading,
});

const mapDispatchToProps = {
  actionSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
