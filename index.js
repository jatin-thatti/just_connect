const express = require('express');
const db = require('./config/mongoose');
const User = require('./models/user');
const path = require('path');
const cookieParser = require('cookie-parser');
require('./config/passport-local');
const session = require('express-session');
const passport = require('passport');
const { Store } = require('express-session');
const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');




const app = express();

app.use(express.static('asserts'));

app.use(sassMiddleware({

    src:'./asserts/scss',
    dest:'./asserts/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'


}))

app.use(express.urlencoded())
app.use(cookieParser())


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.use(session({
    name:'id',
    secret:'hvjk',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:1000*60*60*1
    },
    store: MongoStore.create({
       mongoUrl:'mongodb://localhost/just_connect_db',
        autoRemove:'disabled'
    },function(err){if(err){console.log('error in storing the session informaiton in the db');}})

}))

app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setauth)
app.use(flash())
app.use(require('./config/flash'));
app.use('/',require('./routes/index'));
app.listen(8000,function(err){if(err)return;console.log(`the server is up on port ${8000} !`);})

