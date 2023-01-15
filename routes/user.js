const express=require('express');
const passport = require('passport');
const router=express.Router();

router.get('/',require('../controllers/users').profile);
router.get('/friends',require('../controllers/users').friends);
router.get('/posts',require('../controllers/users').posts);
router.get('/signin',require('../controllers/users').signin)
router.get('/signup',require('../controllers/users').signup)
router.post('/create',require('../controllers/users').create)
router.post('/profile',passport.authenticate('local',{failureRedirect:'/user/signin'}),require('../controllers/users').auth)
router.get('/profile',passport.checkauth,require('../controllers/users').profile)
router.get('/signout',require('../controllers/users').signout)
module.exports=router;