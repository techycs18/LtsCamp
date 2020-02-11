const   express =   require('express'),
        router  =   express.Router({mergeParams: true});

const   CampgroundMongoDB   = require('../models/campModel'), // Gets the Campgrounds Model Schema 
        middleware          = require('../middleware'); //it will automatically include the index file
                                                        //from middleware DIR   

function addToDB(newCampground) {
    CampgroundMongoDB.create(
        newCampground
      , function(err, campGrounds){
          if(err){
              console.log("Error: " +err);
          }else{
              console.log("Data created: " + campGrounds);
          }
      }); // create a new Document and make entry incommentsMongo Campgrounds Collection 
}


router.get('/',(req,res) =>{    //req to Campgrounds   
    CampgroundMongoDB.find({},function(err,allCampgrounds){
        if(err){
            console.log("Error Message: " + err);
        }else{
            res.render('campgrounds/index',{    //looks intoview direc.
                varCampGround : allCampgrounds
            });
        }
        // console.log("In /Campgrounds " + req.user);
    });
    console.log("Req Camping Ground page");
});
router.get('/new',middleware.isLoggedIn,(req,res) =>{
    res.render('campgrounds/new');
});

router.post('/',middleware.isLoggedIn,(req,res) =>{   //this post method is called when the form is submited
    // console.log(req.body);  //here req.body contains the data sent by post request
    var campName = req.body.formName;   //formName is the name given to i/p type in form to enter camp name
    var campImageUrl =  req.body.formUrl;   //formName is the name given to i/p type in form to enter Img url
    var campDescription = req.body.formDescription; 
    var rice = req.body.formPrice;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {nameMongo: campName ,price: Price ,imageMongo: campImageUrl,descriptionMongo: campDescription,authorMongo: author};
w
    addToDB(newCampground);
    req.flash("success","Campground added");
    
    res.redirect('/Campgrounds');   //redirect to /Campgrounds to show newly added data
});

router.get('/:id',(req,res) =>{
    CampgroundMongoDB.findById(req.params.id).populate('commentsMongo').exec(function(err,gotCamp){
        if(err){
            req.flash("error","Campground not found");  
            console.log("\nERROR: " +err);
        }else{
            // console.log("for /id" + gotCamp);
            res.render("campgrounds/show",{
                varShowCampGround: gotCamp
            });
        }
    });
});

router.get('/:id/edit',middleware.checkUser,(req,res)=>{
    CampgroundMongoDB.findById(req.params.id,(error,gotCamp)=>{
        console.log("Campauthor: " + gotCamp.authorMongo.id + "\t" + req.user._id );
        res.render('campgrounds/edit',{
            varCampGround: gotCamp
        });
    })    
});

router.put('/:id',middleware.checkUser,(req,res)=>{
    console.log("IN EDIT" + req.body.campground);
    CampgroundMongoDB.findByIdAndUpdate(req.params.id,req.body.campground,(err,updatedCamp)=>{
        if(err){
            console.log("Error: " +err);
            req.flash("error","Campground not found");  
            res.redirect("/Campgrounds/"+req.params.id);
        }else{
            req.flash("success","Campground updated");
            res.redirect("/Campgrounds/" + req.params.id); 
            // setTimeout(req.flash("",""), 1000)
        }
    })
});

router.delete('/:id',middleware.checkUser,(req,res)=>{
    console.log("IN DELETE");
    CampgroundMongoDB.findByIdAndRemove(req.params.id,err=>{
        if(err){
            console.log("Error: " +err);
            res.redirect("/Campgrounds/" + req.params.id);
        }
        req.flash("success","Campground deleted");
        res.redirect("/Campgrounds");
    })
});

module.exports = router;