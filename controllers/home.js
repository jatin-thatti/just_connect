module.exports.home=function(req,res){
    
    console.log(req.cookies);
    res.cookie('jaitn',1);
    res.render('./index',{title:'we_connect'});
  
}

