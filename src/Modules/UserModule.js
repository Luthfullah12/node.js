const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    mobile:{
        type: Number
    },
    age:{
        type: Number
    },
    address:{
        type: String
    }
})

const userModel = mongoose.model("user",userSchema);
module.exports = userModel;