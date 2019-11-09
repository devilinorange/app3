import { connect } from 'react-redux';

import fetchNews from '../../../store/news/actions';
import NewsPage from '../index';

const mapStateToProps = (state) => ({
  news: state.news.news,
  isLoading: state.news.isLoading,
  eMessage: state.news.eMessage,
});

const mapDispatchToProps = {
  fetchNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
