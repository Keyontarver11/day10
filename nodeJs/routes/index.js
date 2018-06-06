//this is home route


exports.home = function(req,res){
    res.render('home',{
       title: "home" 
    })
}

//about route
exports.about = function(req, res){
    res.render('about',{
        title: "about page"
    })
}