import { connect } from 'react-redux';
import {getSinglePost, getRequest, loadPostsRequest} from '../../../redux/postsRedux';
import SinglePost from "./SinglePost";


const mapStateToProps = state => ({
    post: getSinglePost(state),
    posts: getPosts(state),
    request: getRequest(state),

});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);