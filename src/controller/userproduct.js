const productService = require("../Service/productservic")

const createproduct = async(req,res)=>{
    console.log(req.body);
const data = await productService.createproduct(req.body)
    res.send(data)
}
const getallproduct = async(req,res)=>{
    console.log("working")
    const dataa = await productService.userData()
    res.send(dataa)
}
const getproductbyid = async(req,res)=>{
    const user =  await productService.productdataid(req.params.id)
    res.send(user)
}

const creatorderdata = async(req,res)=>{
    console.log(req.body);
    console.log("creatoreder is working ")
    const data = await productService.createOrder(req.body)
    res.send(data)
}
const creatwishlist = async(req,res)=>{
    console.log(req.body,"wishlist created")
    const data = await productService.creatwishdata(req.body)
    res.send(data)
}

const getOrderDetails = async(req,res)=>{
    const data = await productService.getOrderDetails(req.params.id)
    res.send(data)
}
const getwishlistdetails = async(req,res)=>{
    const data = await productService.getwishlistdat(req.params.id)
    res.send(data)
}
module.exports = {
    createproduct,
    getallproduct,
    getproductbyid,
    creatorderdata,
    creatwishlist,
    getOrderDetails,
    getwishlistdetails
}