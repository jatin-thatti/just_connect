const express=require('express');

const router = express.Router();

const commentController = require('../controllers/comment');
router.post('/addcomment/:post_id',commentController.addcomment);
router.get('/destroy/:id',commentController.destroy);
module.exports=router;
