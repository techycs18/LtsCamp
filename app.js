var     express         =   require('express'),  //get express module from node-modules
        app             =   express(),  //store express function in app const to use it further
        body_parser     =   require('body-parser'), //get body-parser module
        flash           =   require('connect-flash'), //should be before you passport require
        mongoose        =   require('mongoose'),    //get mongoose module
        passport        =   require('passport'),
        LocalStrategy   =   require('passport-local'),

        //Getting routes
        commentRoutes           =   require('./routes/comments'),
        campgroundRoutes        =   require('./routes/campgrounds'),
        indexRoutes             =   require('./routes/index'),    
        methodOverride          = require('method-override');

// const   uri = 'mongodb://localhost/YelpCampDB';
const   uri = process.env.DATABASE_URI;  //they are set in local enviroment using exxport MONGO_LAB = SOME_URL and then used here
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log("Connected to DB: " + uri)
}).catch(err=>{
    console.log("Error: " + error +  "\t"+uri);
}); 
mongoose.set('useFindAndModify', false);

var CampgroundMongoDB   =   require('./models/campModel'), // Gets the Campgrounds Model Schema 
    seedDB              =   require('./seed'),
    comments            =   require('./models/commentsModel'),    //gets the comments Model
    User                =   require('./models/user');

    app.locals.moment   =   require('moment');

app.set('view engine','ejs');   //make the deafult file format as .ejs in render function
//first npm install ejs module to further use it 
app.use(body_parser.urlencoded({extended:true}));
console.log(__dirname);//dirname container the path to current directory
app.use(express.static(__dirname + "/public")); //set public as default path 
app.use(methodOverride("_method"));
app.use(flash());

// seedDB();

//===PASSPORT CONFIGURATION===
app.use(require('express-session')({
    secret: "Messi is the best Football player in the world",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){//this is called on every single route
    res.locals.currentUser = req.user;  //this will add current user to all the templates
    res.locals.error = req.flash("clear");
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next(); //every template will have access to current user
    // console.log("Current User: " + req.user);
})


app.use("/",indexRoutes);//replaces the initial route as the string passed
app.use("/Campgrounds/:id/comments",commentRoutes);//replaces the initial route as the string passed
app.use("/Campgrounds",campgroundRoutes);//replaces the initial route as the string passed

app.get('*',(req,res) =>{
    res.send("<h1>INVALID REQUEST<h1>");
});

app.listen(process.env.PORT || 3000,console.log("Yelp Camp Server has been started.."));
