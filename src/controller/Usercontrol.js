const userService = require("../Service/Userservic")

const createUserData = async(req,res)=>{
    console.log(req.body);
    
    const data = await userService.createUser(req.body)
    res.send(data)
}
const getAlluser = async(req,res)=>{
const User = await userService.userData();
res.send(User)

}
const getid = async(req,res)=>{
    const id = await userService.userdataid();
}
module.exports = {
    createUserData,
    getAlluser,
    getid
}