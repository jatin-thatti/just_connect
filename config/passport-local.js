const passport = require("passport");
const User = require('../models/user');
const LocalStrategy =  require('passport-local').Strategy;

passport.use(new LocalStrategy({usernameField:'email',passReqToCallback:true},function(req,email,password,done){


    User.findOne({email:email},function(err,user)
    {
        if(err){return done(err);}
        if( !user || user.password!=password){req.flash('error','Invalid UserName/Password');return done(null,false);}
        return done(null,user);
    });


}));

passport.serializeUser(function(user,done){

    done(null,user.id);

})

passport.deserializeUser(function(id,done){

    User.findById(id,function(err,user)
    {
        if(err)return done(err);
        done(null,user);
    })

})


passport.checkauth=function(req,res,next)
{
    if(req.isAuthenticated())return next();
    return res.redirect('back');
}

passport.setauth=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        res.locals.user=req.user;
       next(); 
    }else{
    console.log('not authenticatied');
    
    next();}
}
module.exports=passport;
