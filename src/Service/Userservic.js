const userModel = require("../Modules/UserModule")

const createUser = async(body)=>{
    const createUserData = await userModel.create(body)
    return createUserData;
}
const userData = async()=>{
    const data = await userModel.find({})
    return data
}
const userdataid = async()=>{
    const data = await userModel.find({})
    return data
}

module.exports ={
    createUser,
    userData,
    userdataid
}