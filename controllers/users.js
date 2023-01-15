const passport = require('passport');
const User=require('../models/user')
exports.profile=function(req,res)
{       
        if(req.isAuthenticated()){return res.render('profile');}
        return res.redirect('/user/signin');
        
      

}
exports.signout=function(req,res)
{
    req.logout(function(err)
    {
        if(err){return;}
        return res.redirect('/user/signin');
    });
//    return res.redirect('/user/signin');
}
exports.auth=function(req,res)
{
    res.redirect('/user/profile');
}
exports.friends=function(req,res)
{
    res.end(req.user);
    // res.end('<h1>this is the user friends</h1>')
}
exports.posts=function(req,res)
{
    res.end('<h1>this is the user posts</h1>')
}
exports.signin=function(req,res)
{   
    if(req.isAuthenticated()){return res.redirect('/user/profile');}
    
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
