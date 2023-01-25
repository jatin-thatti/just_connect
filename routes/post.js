const express=require('express');
const router=express.Router();
const passport = require('passport');
const postController = require('../controllers/post');
router.post('/create',passport.checkauth,postController.create);

router.get('/destroy/:id',passport.checkauth,postController.destroy);


module.exports=router;