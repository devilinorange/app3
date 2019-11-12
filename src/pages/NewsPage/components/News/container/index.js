import { connect } from 'react-redux';

import { deleteSingleNews } from '../../../../../store/singleNews/actions';
import fetchNews from '../../../../../store/news/actions';
import News from '../index';

const mapStateToProps = (state) => ({
  token: state.session.token,
});

const mapDispatchToProps = {
  fetchNews,
  deleteSingleNews,
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
