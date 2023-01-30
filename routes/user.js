const express=require('express');
const passport = require('passport');
const { profile } = require('../controllers/users');
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
router.get('/details/:id',require('../controllers/users').details);
router.post('/update/:id',require('../controllers/users').update);
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}))
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/user/signin'}),require('../controllers/users').auth)
module.exports=router;