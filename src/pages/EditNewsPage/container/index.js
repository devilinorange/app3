import { connect } from 'react-redux';

import { fetchSingleNews, changeSingleNews } from '../../../store/singleNews/actions';
import fetchNews from '../../../store/news/actions';
import EditNewsPage from '../index';

const mapStateToProps = (state) => ({
  news: state.singleNews.news,
  isLoading: state.singleNews.isLoading,
  eMessage: state.singleNews.eMessage,
  token: state.session.token,
  changeIsLoading: state.singleNews.changeIsLoading,
  changeErrorMessage: state.singleNews.changeErrorMessage,
});

const mapDispatchToProps = {
  fetchSingleNews,
  changeSingleNews,
  fetchNews,
};

const EditNewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(EditNewsPage);

export default EditNewsPageContainer;
