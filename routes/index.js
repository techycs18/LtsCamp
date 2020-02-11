const   express     =   require('express'),
        router      =   express.Router();   //ac  
        User        =   require('../models/user'),
        passport    =   require('passport');

//Default root request
router.get('/',function(req,res){   //req & res are the paramters caught in callback function when a request was made
    //req contains the parameter when a request was made
    //res handles the response part for a request

    //render function always looks for files under views directory by default, it a feature of express module
    res.render('Home');  //render func. will manipulate a template file 
    console.log("Req landing page") ;
});

//Authentication Routes
router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.post('/signup',(req,res)=>{
    
    var name = new User({username: req.body.username});
    var password =  req.body.password;
    User.register(name,password,function(err,newUser){
        if(err){
            console.log(err);
            return res.render('signup',{
                error: err.message
            });
        }
        passport.authenticate("local")(req,res,function(){
            req.flash("success","Signed you up");
            res.redirect('/Campgrounds');
        })
    });
});

router.get('/login',(req,res)=>{
    res.render('login');
})

    router.post("/login", function (req, res, next) {
      passport.authenticate("local", function (err, user, info) {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("/login");
        }
        if (!user) {
          req.flash("error", "Login failed.");
          return res.redirect("/login");
        }
        req.logIn(user, function (err) {
          if (err) {
            req.flash("error", err.message);
            return res.redirect("/login");
          }
          console.log(user.username + " just logged in to the website.");
          req.flash("success", "Login successful.");
          return res.redirect("/Campgrounds");
        });
      })(req, res, next);
    });

router.get('/logout',(req,res)=>{
    req.logout();
    req.flash("success","Logged Out ");
    res.redirect('/Campgrounds');
})

module.exports = router;