const ordermodul = require("../Modules/ordermodul");
const userModel = require("../Modules/UserModule")

const createUser = async(body)=>{
    const createUserData = await userModel.create(body)
    return createUserData;
}

const userData = async()=>{
    const data = await userModel.find({})
    return data
}
const userdataid = async(id)=>{
    const data = await userModel.findById(id)
    return data
}
const daletdata = async(id)=>{
    const userdata = await userModel.findById(id)
    if(!userdata){
        console.log("user not found");
        
    }
    const data = await userModel.findByIdAndDelete(id)
    return userdata
}

const uppdateuser = async(id,updateBodyData)=>{
    const userdata = await userModel.findById(id)
    if (!userdata){
        console.log(("user data not found"));
    }
    const data = await userModel.findByIdAndUpdate({_id:id},updateBodyData,{new:true})
    console.log("working");
    return data
}

module.exports ={
    createUser,
    userData,
    userdataid,
    daletdata,
    uppdateuser,
    
}