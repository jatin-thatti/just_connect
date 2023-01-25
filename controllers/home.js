const User = require('../models/user');
module.exports.home=function(req,res){
    
    // User.findById(req.user._id)
    res.render('./index',{title:'we_connect'});
  
}
