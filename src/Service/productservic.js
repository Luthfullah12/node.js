const ordermodul = require("../Modules/ordermodul");
const productmodel = require("../Modules/productmodul");
const wishlistmodel = require("../Modules/wishlistmodul");
const userModel = require("../Modules/UserModule");
const mongoose = require("mongoose");
const createproduct = async (body) => {
    const creatprodata = await productmodel.create(body)
    return creatprodata;
}

const userData = async () => {
    const data = await productmodel.find({})
    console.log("product data active")
    return data
}
const productdataid = async (id) => {
    const data = await productmodel.findById(id)
    console.log("productdataid working")
    return data
}

const createOrder = async (body) => {
    const data = await ordermodul.create(body)
    console.log(" the order deatil is ready")
    return data
}
const creatwishdata = async (body) => {
    const data = await wishlistmodel.create(body)
    console.log("the wish list deatail is ready")
    return data
}
const getOrderDetails = async (id) => {
    console.log(id, "idddddd");
    const values = await userModel.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup: {
                from: "orders",
                localField: "_id",
                foreignField: "userid",
                as: "orderData"
            }
        },
        {
            $lookup: {
                from: "products",
                localField: "orderData.Productid",
                foreignField: "_id",
                as: "productData"
            }
        },
        {
            $project: {
                name: 1,
                email: 1,
                mobile: 1,
                address: 1,
                deliverystatus: "$orderData.deliverystatus",
                productName: "$productData.name",
                price: "$productData.price",
                discount: "$productData.discount"

            }
        }
    ])
    return values

}

const getwishlistdat = async (id) => {
    console.log(id, "idddddd");
    const values = await userModel.aggregate([{
        $match: {
            _id: new mongoose.Types.ObjectId(id)
        }
    },
    {
        $lookup: {
            from: "wishlists",
            localField: "_id",
            foreignField: "userid",
            as: "wishlistdata"
        }
    },
    {
        $lookup:{
            from:"products",
            localField:"wishlistdata.Productid",
            foreignField:"_id",
            as:"productdata"
        }
    },
    {
        $project:{
            name: 1,
            email: 1,
            mobile: 1,
            address: 1,
            productName: "$productdata.name",
            price:"$productdata.price",
            discount:"$productdata.discount",
            wishlistCount:{$size:"$wishlistdata"}
        }
    }
    ])
    return values
}
module.exports = {
    createproduct,
    userData,
    productdataid,
    createOrder,
    creatwishdata,
    getOrderDetails,
    getwishlistdat
}