//All the middle ware
const   CampgroundMongoDB   = require('../models/campModel'),// Gets the Campgrounds Model Schema 
        comments            = require('../models/commentsModel'); //gets the comments Model 

const middlewareOBJ = {};

middlewareOBJ.checkCommentsOwner = function(req,res,next){
    if(req.isAuthenticated()){
        comments.findById(req.params.comment_id,(error,gotComment)=>{
            if(error){
                req.flash("error","Campground not found");   
                res.redirect("back");
            }else{
                // console.log("Campauthor: " + gotCamp.authorMongo.id + "\t" + req.user._id );
                if(gotComment.authorMongo.id.equals(req.user._id)){
                    next();
                }
                else{ 
                    req.flash("error","You are not authorized to do that");
                    res.redirect("back");
                }
            }
        })
    }else{
        req.flash("error","You need to log in to do that");
        res.redirect("/login");
    }
}

middlewareOBJ.isLoggedIn    =   function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","PLEASE LOGIN FIRST");
    res.redirect('/login');
}

middlewareOBJ.checkUser = function(req,res,next){
    if(req.isAuthenticated()){
        CampgroundMongoDB.findById(req.params.id,(error,gotCamp)=>{
            if(error){
                // console.log("Error: " + error);
                res.redirect("/Campgrounds");
            }else{
                // console.log("Campauthor: " + gotCamp.authorMongo.id + "\t" + req.user._id );
                if(gotCamp.authorMongo.id.equals(req.user._id)){
                    next();
                }
                else{
                    req.flash("error","You are not authorized to do that");
                    res.redirect("back")
                }
            }
        })
    }else{
        req.flash("error","You need to login");
        res.redirect("back")
    }
}

module.exports = middlewareOBJ
