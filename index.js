const express = require('express');
const db = require('./config/mongoose');
const User = require('./models/user');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.urlencoded())
app.use(cookieParser())

app.use('/',require('./routes/index'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));


app.listen(8000,function(err){if(err)return;console.log(`the server is up on port ${8000} !`);})

