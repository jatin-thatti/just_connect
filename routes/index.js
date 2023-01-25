const { application } = require('express');
const express=require('express');
const router=express.Router();

router.get('/',require('../controllers/home').home);
router.use('/user',require('./user'));
router.use('/create',require('./create'));
router.use('/post',require('./post'));
router.use('/comment',require('./comment'));
module.exports=router;
