import React from 'react';
//import { PropTypes } from 'prop-types';
//import { connect } from 'react-redux';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

class PostForm extends React.Component {
    state = {
        post: {
            title: '',
            author: '',
            content: ''
        }
    };

    handleChange = (e) => {
        const { post } = this.state;
        this.setState({ post: { ...post, [e.target.name]: e.target.value }});
    };

    handleEditor = (text) => {
        const { post } = this.state;
        this.setState({ post: { ...post, content: text }});
    };

    render() {
        const { post } =this.state;
        const { handleChange } = this;
        const { handleEditor } = this;

        return (
            <div>
                <TextField label={'Title'} onChange={handleChange} value={post.title} name={'title'}/>
                <TextField label={'Author'} onChange={handleChange} value={post.author} name={'author'}/>
                <SectionTitle>Edit post content</SectionTitle>
                <Editor
                    className="content-editor"
                    text={post.content}
                    onChange={handleEditor}
                    options={{ placeholder: false, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] } }}
                />
                <Button variant={'primary'}>Add post</Button>
            </div>
        );
    }
}

export default PostForm;