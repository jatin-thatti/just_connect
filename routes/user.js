const express=require('express');
const router=express.Router();

router.get('/profile',require('../controllers/users').profile);

router.get('/',require('../controllers/users').user);
router.get('/friends',require('../controllers/users').friends);
router.get('/posts',require('../controllers/users').posts);
router.get('/signin',require('../controllers/users').signin)
router.get('/signup',require('../controllers/users').signup)
router.post('/create',require('../controllers/users').create)
router.post('/auth',require('../controllers/users').auth);
router.post('/signout',require('../controllers/users').signout);

module.exports=router;