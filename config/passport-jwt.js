const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const User = require('../models/user');
const ExtractJwt = require('passport-jwt').ExtractJwt;

let opts={
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'jatin'
}

passport.use(new JWTStrategy(opts,function(jwt_payload, done){
    User.findById({_id:jwt_payload._id},(err,user)=>{
        if(err){return done(err,false);}
    })

    if(user)
    {   
        return done(null,user);
    }
    else{
        return done(null,false);
    }


}))


module.exports=passport;


