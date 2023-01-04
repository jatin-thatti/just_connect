const express=require('express');
const router=express.Router();

router.get('/',require('../controllers/users').profile);
router.get('/friends',require('../controllers/users').friends);
router.get('/posts',require('../controllers/users').posts);
router.get('/signin',require('../controllers/users').signin)
router.get('/signup',require('../controllers/users').signup)
router.post('/create',require('../controllers/users').create)

module.exports=router;