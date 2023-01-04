const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/just_connect_db');

const db=mongoose.connection;


db.on('error',console.error.bind(console,'failed to load the database'));

db.once('open',()=>console.log("the db is working fine"));

module.exports=db;