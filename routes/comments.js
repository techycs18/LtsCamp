const   express             =   require('express'),
        router              =   express.Router({mergeParams: true}),//the parameters passed via routes are passed(eg. id in routes)  
        CampgroundMongoDB   = require('../models/campModel'),// Gets the Campgrounds Model Schema 
        comments            = require('../models/commentsModel'); //gets the comments Model  
        middleware          = require('../middleware');

router.get('/new',middleware.isLoggedIn,(req,res)=>{
    CampgroundMongoDB.findById(req.params.id,(err,gotCamp)=>{
        if(err){
            console.log(err);
            req.flash("error","Campground not found");
            res.redirect("/Campgrounds/"+req.params.id);  
        }else{
            res.render('comments/new',{
                varCampData: gotCamp
            });
        }
    });
});


router.post('/',middleware.isLoggedIn,(req,res)=>{
    CampgroundMongoDB.findById(req.params.id,(err,gotCamp)=>{
        if(err){
            console.log(err);
            req.flash("error","Cannot add campground");
            res.redirect("/Campgrounds/"+req.params.id);
        }else{
            comments.create(req.body.comments,(err,newComments)=>{
                if(err){
                    console.log("Error");
                }else{
                    // console.log(req.body.comments);
                    newComments.authorMongo.id = req.user._id;
                    newComments.authorMongo.username = req.user.username;
                    newComments.save();
                    gotCamp.commentsMongo.push(newComments);
                    gotCamp.save();   
                    console.log("Comment added"); 
                    req.flash("success","Comment added");
                    res.redirect("/Campgrounds/" + req.params.id);
                }
            });
        }
    });
});

router.get('/:comment_id/edit',middleware.checkCommentsOwner,(req,res)=>{
    console.log("Comment ID: " + req.params.comment_id + "\nCamp ID" + req.params.id);
    comments.findById(req.params.comment_id,(err,gotComment)=>{
        if(err){
            console.log("Error" + err);
            req.flash("error","Cannot edit comment");
            res.redirect("/Campgrounds/"+req.params.id);
        }else{
            // console.log("Comment: " + gotComment)
            res.render("comments/edit",{
                varCampID: req.params.id,
                comment: gotComment
            })
        }
    })
})

router.put('/:comment_id/edit',middleware.checkCommentsOwner,(req,res)=>{
    // res.send("Edit sadd Comment");
    comments.findByIdAndUpdate(req.params.comment_id,req.body.comments,(err,updated)=>{
        if(err){
            console.log("error: " + err)
            req.flash("error","Cannot add campground");
            res.redirect("/Campgrounds/"+req.params.id);
        }else{
            req.flash("success","Comment updated");
            res.redirect("/Campgrounds/" + req.params.id);
        }
    })
})

router.delete('/:comment_id',middleware.checkCommentsOwner,(req,res)=>{
    console.log("Comment ID: "+req.params.comment_id);
    comments.findByIdAndRemove(req.params.comment_id,err=>{
        if(err){
            req.flash("error","Cannot edit commment");
            res.redirect("/Campgrounds/"+req.params.id);
            console.log(err);
        }else{
            console.log("DELETED COMMENT");
            req.flash("success","Comment deleted");
            res.redirect("/Campgrounds/"+req.params.id);
        }
    });
})

module.exports = router;