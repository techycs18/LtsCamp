var     mongoose    =   require('mongoose'),
        plMognoose  =   require('passport-local-mongoose'),

userSchema  =   mongoose.Schema({
    username: String,
    password: String
});

userSchema.plugin(plMognoose);

module.exports  =   mongoose.model("User",userSchema);
