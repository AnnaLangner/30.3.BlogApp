import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts();
    }

    render() {
        const { counter } = this.props;

        return (
            <div>Posts amount: {counter.map(post => <p key={post.id}>{post.counter}</p>)}</div>
        )
    }
}

PostsCounter.propTypes = {
    counter: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
    loadPosts: PropTypes.func.isRequired,
};

export default PostsCounter;