    version 1
- Create root and Campground get Requests 
- Create template(ejs) files(inside views directory) for layout of pages when       requested
- Create an array of Campground name and image 
- Render the array into the Campground template file
- Create header and footer (inside views/partials)
- Add Bootstrap    
 
     version 2
- Create a form to add Camp name and Image using post request 
- Do some styling with bootstrap (grid system to display images in grid) 
- Connecting to mongoDB via mongoose library 
- Remove the array and retrieve the data from database 
 
     version 3
- Use concept of seed, Seeding a database is a process in which an initial set of   data is provided to a database when it is being installed     
     version 4
- Create Modules campModel, commentsModel,  and include them in apps.js
- Using populate().exec method for populating comment section in Campground Schema
 
     version 5
- Use nested routes for adding comments 
- Use CSS for adding comments
 
     version 6
- Add Authentication for users to access Yelp Camp 
- Only authenticated user can add comments tp camps 
- Make changes to nav bar depending upon user is logged or not
 
     version 7
- Make modules of Routes and import them
- Use router = express.Router() instead of app = express 
 
     version 8
- Associate user and comments
- Save authors name to comment automatically
- Add Author name to campground who created it
 
     version 9
- Add edit option user who has posted the campground
- Use method override to put request for editing/updating campground 
- Provide authorization for edit and delete campgrounds

     version 10
- Edit and update comment
- Provide authorization to comments
- Refactor Middleware 

     version 11
- Install and configure flash 
- add boostrap alerts to header

     version 12 
- Add css to home page   
- Add animation feature for home background
- Add dynamic pricing feature    

     version 13 
- Add momentJS to set the time of creation camp and comment added