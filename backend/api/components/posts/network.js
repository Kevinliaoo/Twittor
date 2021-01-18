const express = require('express');

const response = require('../../../network/response');
const secure = require('../users/secure');
const controller = require('./controller'); 

const router = express.Router(); 

// Get all posts of a specified user 
router.get('/get/:uid', (req, res) => {
    controller.getPosts(req.params.uid)
        .then(posts => response.success(req, res, posts, 200))
        .catch(e => response.error(req, res, e, 500));
})

                // Uso update porque tendría la misma funcionalidad que post
router.post('/', secure('update'), (req, res) => {
    // En el body hay que mandar un uid conteniendo el uid del usuario 
    controller.createPost(req.body)
        .then(() => {
            response.success(req, res, 'Posted', 200);
        })
        .catch(error => response.error(req, res, error, 500));
})

// Add likes to a post given it's id
router.patch('/like/:postId/:liker', secure('update'), (req, res) => {
    controller.like(req.params.postId, req.params.liker, 1)
        .then(() => response.success(req, res, 'Post liked', 200))
        .catch(e => response.error(req, res, e, 500));
})

router.patch('/unlike/:postId/:liker', secure('update'), (req, res) => {
    controller.like(req.params.postId, req.params.liker, 0)
        .then(() => response.success(req, res, 'Post unliked', 200))
        .catch(e => response.error(req, res, e, 500));
})

router.delete('/:postId', secure('update'), (req, res) => {
    controller.deletePost(req.params.postId) 
        .then(() => response.success(req, res, 'Post deleted', 200)) 
        .catch(() => response.error(req, res, 'Internal error', 500)); 
})

module.exports = router; 