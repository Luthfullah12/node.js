const mongoose = require("mongoose")
const { Schema } = mongoose;

const orderSchema = new mongoose.Schema({
    userid:{
        type: Schema.Types.ObjectId, // ✅ Correct way to use ObjectId

    },
    Productid:{
        type: Schema.Types.ObjectId, // ✅ Correct way to use ObjectId

    },
    deliverystatus:{
        type: String,
        default :"orderd"
    }
})
const ordermodul = mongoose.model("order",orderSchema)
module.exports = ordermodul;