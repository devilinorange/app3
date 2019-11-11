import { connect } from 'react-redux';

import { fetchSingleNews } from '../../../store/singleNews/actions';
import ReadNewsPage from '../index';

const mapStateToProps = (state) => ({
  news: state.singleNews.news,
  isLoading: state.singleNews.isLoading,
  eMessage: state.singleNews.eMessage,
  userId: state.session.id,
});

const mapDispatchToProps = {
  fetchSingleNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadNewsPage);
