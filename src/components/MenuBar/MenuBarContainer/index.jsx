import { connect } from 'react-redux';

import MenuBar from '../index';

const mapStateToProps = (state) => ({
  userInfo: state.session.userInfo,
});

export default connect(mapStateToProps)(MenuBar);
