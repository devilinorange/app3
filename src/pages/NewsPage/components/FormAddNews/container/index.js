import { connect } from 'react-redux';

import { addSingleNews } from '../../../../../store/singleNews/actions';
import fetchNews from '../../../../../store/news/actions';
import FormAddNews from '../index';

const mapStateToProps = (state) => ({
  token: state.session.token,
  isLoading: state.singleNews.addIsLoading,
  eMessage: state.singleNews.addErrorMessage,
});

const mapDispatchToProps = {
  addSingleNews,
  fetchNews,
};

const FormAddNewsContainer = connect(mapStateToProps, mapDispatchToProps)(FormAddNews);

export default FormAddNewsContainer;
