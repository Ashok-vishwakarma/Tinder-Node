const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String },
    emailId: { type: String },
    password: { type: String },
    age: { type: String },
    gender: { type: String },
    role: {
        type: String,
        require: true,
        enum: ["admin" , "user" , "manager"]
    }

})




module.exports = mongoose.model("User", userSchema); 