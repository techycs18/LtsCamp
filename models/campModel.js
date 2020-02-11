var mongoose = require('mongoose');

var campSchema = new mongoose.Schema({
    nameMongo: String,
    price: String,
    imageMongo: String,
    descriptionMongo: String,
    authorMongo:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String 
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    commentsMongo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CommentsInMongo" //refer to the model(look into commentsModel and see model name)
        }
    ]
});     //create a standar schema for document entry (not required but we can use it for reference)


module.exports = mongoose.model("CampgroundsInMongo",campSchema);   //model 