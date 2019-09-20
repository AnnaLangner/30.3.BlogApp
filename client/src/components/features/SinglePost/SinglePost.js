import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FacebookProvider, Comments, ShareButton  } from 'react-facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import Spinner from '../../common/Spinner/Spinner';
import Alert from "../../common/Alert/Alert";
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import { BASE_URL} from "../../../config";

class SinglePost extends React.Component {

    componentDidMount() {
        const {loadPost, resetRequest, match} = this.props;
        loadPost(match.params.id);
        resetRequest();
    }

    render() {
        const { post, request, location } = this.props;

        if (request.pending === false && request.success === true && post ) {
            return (
                <div>
                    <article>
                        <SmallTitle>{post.title}</SmallTitle>
                        <FacebookProvider appId="2447493922148900">
                            <ShareButton href= {`${BASE_URL}/${location.pathname}`}>
                                <FontAwesomeIcon
                                    icon={faShare}
                                />
                                Share
                            </ShareButton>
                        </FacebookProvider>
                        <HtmlBox>{post.content}</HtmlBox>
                        <p> Author: {post.author}</p>
                        <FacebookProvider appId="2447493922148900">
                            <Comments href={`${BASE_URL}/${location.pathname}`} />
                        </FacebookProvider>
                    </article>
                </div>
            );
        } else if (request.pending === true || request.success === null) {
            return (
                <div>
                    <Spinner/>
                </div>
            );
        } else if (request.pending === false && request.error !== null) {
            return (
                <div>
                    <Alert variant={'error'}>{request.error}</Alert>
                </div>
            );
        } else if (request.pending === false && request.success === true) {
            return (
                <div>
                    <Alert variant={'info'}>No posts</Alert>
                </div>
            );
        } else {
            return (
                <div>
                    <Alert variant={'info'}>Something went wrong...</Alert>
                </div>
            );
        }
    }
}

SinglePost.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        })
    ),
    loadPost: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props}/>);