import { connect } from 'react-redux';
import { getRequest, addPostRequest } from '../../../redux/postsRedux';
import PostForm from './PostForm';

const mapStateProps = state => ({
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    addPost: (post) => dispatch(addPostRequest(post)),
});

export default connect(mapStateProps, mapDispatchToProps)(PostForm);