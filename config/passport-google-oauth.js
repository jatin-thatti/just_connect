const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

passport.use(new googleStrategy({

    clientID:"339046110268-dqvbacmljlos681nl2lobl346inrde5d.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:8000/user/auth/google/callback"

},
function(accessToken,refreshToken,profile, done){

    User.findOne({email:profile.emails[0].value}).exec(
        function(err,user)
    {   
        if(err){console.log(err);return;}
        if(user){return done(null,user);}
        else{

            User.create({name:profile.displayName,email:profile.emails[0].value,password:crypto.randomBytes(20).toString('hex')},function(err,user1)
            {
                if(err){console.log(err);return;}
                return done(null,user1);
            })
        }
    })





}))

module.exports = passport;
