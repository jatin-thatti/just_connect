const { application } = require('express');
const express=require('express');
const router=express.Router();

router.get('/',require('../controllers/home').home);
router.use('/user',require('./user'));
router.use('/create',require('./create'));
module.exports=router;
