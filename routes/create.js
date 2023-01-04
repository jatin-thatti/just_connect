const express=require('express');

const router=express.Router();

router.post('/',require('../controllers/create'));

module.exports=router;