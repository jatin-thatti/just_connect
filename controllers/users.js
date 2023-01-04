const User=require('../models/user')
exports.profile=function(req,res)
{
    res.end('<h1>this is the user profile</h1>')
}
exports.friends=function(req,res)
{
    res.end('<h1>this is the user friends</h1>')
}
exports.posts=function(req,res)
{
    res.end('<h1>this is the user posts</h1>')
}
exports.signin=function(req,res)
{
    res.render('signin.ejs');
}
exports.signup=function(req,res)
{
    res.render('signup.ejs',{title:'sign up form'});
}
exports.create=function(req,res)
{
   User.create(req.body,function(err,newc){if(err){console.error('there is an error in creating the user');return;}console.log(`${newc} \n created`)})
   res.redirect('/user/signin');
}