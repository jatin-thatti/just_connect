const express = require('express');
const router = express.Router();
const postApiController = require('../../../controllers/api/post_api');
router.get('/post',postApiController.post);
router.delete('/post/:id',postApiController.destroy);
router.use('/user',require('./user'));
module.exports = router;