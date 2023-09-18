const express = require('express');

const router = express.Router();

const postController = require('../controllers/post');

router.get('/', postController.getPosts);
router.get('/tags', postController.getPostsByTags);
router.get('/title', postController.getPostsByTitle);
router.get('/:id', postController.getPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;