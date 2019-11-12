import { connect } from 'react-redux';

import { fetchSingleNews, deleteSingleNews } from '../../../store/singleNews/actions';
import fetchNews from '../../../store/news/actions';
import ReadNewsPage from '../index';

const mapStateToProps = (state) => ({
  news: state.singleNews.news,
  isLoading: state.singleNews.isLoading,
  eMessage: state.singleNews.eMessage,
  userId: state.session.id,
  token: state.session.token,
});

const mapDispatchToProps = {
  fetchSingleNews,
  deleteSingleNews,
  fetchNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadNewsPage);
