const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

//get all posts
router.route('/posts').get(PostController.getPosts);
router.route('/posts/:id').get(PostController.getSinglePost);

//add posts
router.route('/posts').post(PostController.addPost);

// get posts by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);

//get random post
router.route('/post/random').get(PostController.getRandomPost);

module.exports = router;