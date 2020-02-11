const mongoose = require('mongoose')

var commentSchema = mongoose.Schema({
    textMongo:  String,
    authorMongo: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    createdTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('CommentsInMongo',commentSchema);