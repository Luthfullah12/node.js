const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    id:{
        type: String
    },
    name:{
        type: String
    },
    price:{
        type: Number
    },
    discount:{
        type: Number
    },
})

const productmodel = mongoose.model("Product",userSchema)
module.exports = productmodel;