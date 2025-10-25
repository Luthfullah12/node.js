const mongoose = require("mongoose")
const { Schema } = mongoose;

const owishlistSchema = new mongoose.Schema({
    userid:{
        type: Schema.Types.ObjectId, 

    },
    Productid:{
        type: Schema.Types.ObjectId, 

    },
})
const wishlistmodel = mongoose.model("wishlist",owishlistSchema)
module.exports = wishlistmodel;