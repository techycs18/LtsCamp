const mongoose = require('mongoose')
const CampgroundModel = require('./models/campModel');
const commentsModel = require('./models/commentsModel');

var someText = "EDIT LATER"  

var data = [
    {
        nameMongo: 'Spiti Valley, Himachal Pradesh',
        price: 800,
        imageMongo: 'https://toib.b-cdn.net/wp-content/uploads/2017/08/spiti-valley-himachal-pradesh.jpg',
        descriptionMongo: someText,
        authorMongo: {
            id : "5e4270d7f81392159fb60b05",
	        username : "Chaitanya Sonavane",
        }
    },
    {
        nameMongo: 'Tso Moriri, Ladakh',
        price: 900,
        imageMongo: 'https://toib.b-cdn.net/wp-content/uploads/2017/08/tso-Moriri-Ladakh.jpg',
        descriptionMongo: someText,
        authorMongo: {
            id : "5e42731d16678c1764c8050b",
	        username : "Swapnil Katve"
        }
 
    },
    {
        nameMongo: 'Sam Sand Dunes –Jaisalmer',
        price: 750,
        imageMongo: 'https://toib.b-cdn.net/wp-content/uploads/2017/08/sam-sand-dunes-%E2%80%93jaisalmer.jpg',
        descriptionMongo: someText,
        authorMongo: {
            id : "5e4270d7f81392159fb60b05",
	        username : "Chaitanya Sonavane",

        }
    },
    {
        nameMongo: 'La Rosa campsite',
        price: 850,
        imageMongo: 'https://static.toiimg.com/photo/41343583/.jpg',
        descriptionMongo: someText,
        authorMongo: {
            id : "5e4270d7f81392159fb60b05",
	        username : "Chaitanya Sonavane",
        }
    },
    {
        nameMongo: 'Sahara Desert, Morocco',
        price: 1100,
        imageMongo: 'https://www.bootsnall.com/articles/wp-content/uploads/sites/2/2012/07/1.-Morocco.jpg',
        descriptionMongo: someText,
        authorMongo: {
            id : "5e42731d16678c1764c8050b",
	        username : "Swapnil Katve"
        }
    },
    {
        nameMongo: 'Lake District, England',
        price: 850,
        imageMongo: 'https://www.bootsnall.com/articles/wp-content/uploads/sites/2/2012/07/6-england.jpg',
        descriptionMongo: someText,
        authorMongo: {
            id : "5e4270d7f81392159fb60b05",
	        username : "Chaitanya Sonavane",
        }
    },
    {
        nameMongo: 'Chief’s Island, Mombo Camp',
        price: 1900,
        imageMongo: 'https://static.toiimg.com/photo/40414737/.jpg',
        descriptionMongo: someText,
        authorMongo: {
            id : "5e42731d16678c1764c8050b",
	        username : "Swapnil Katve"
        }
    },
    {
        nameMongo: 'La Brouquere',
        price: 1700,
        imageMongo: 'https://static.toiimg.com/photo/40575639/.jpg',
        descriptionMongo: someText,
        authorMongo: {
            id : "5e42731d16678c1764c8050b",
	        username : "Swapnil Katve"
        }
    },
];

function seedDB() {
    // CampgroundModel.deleteMany({},err=>{
    //     if(err){
    //         console.log("Error: " +err);
    //     }else{
    //         console.log("Removed Campgrounds");
    //         commentsModel.deleteMany({},err =>{
    //             if(err){
    //                 console.log("Some error");
    //             }else{
    //                 console.log("Removed Comments");
    //             }
    //         });
    //     }
    //     data.forEach( eachCamp =>{
    //         CampgroundModel.create(eachCamp,(err,campSavedToDb)=>{
    //             if(err/login  textMongo:  campSavedToDb.nameMongo + " is a good place to have a good time with family and friends. If you want to make a camping plan for some weekend you can definitely visit and have fun. It is worth visting and spending time with nature",
    //                     authorMongo: {
    //                         id : "5e427167f81392159fb60b06",
	//                         username : "Richard Bale"
    //                     }       
    //                 },(err,commentAdded)=>{
    //                     if(err){
    //                         console.log(err);
    //                     }else{
    //                         console.log("Comments added: ");
    //                         campSavedToDb.commentsMongo.push(commentAdded);
    //                         campSavedToDb.save();
    //                     }
    //                 });
    //             }
    //         });
    //     });
    // });    
    console.log("seedDB was called");
}

module.exports = seedDB;