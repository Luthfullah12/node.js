const userService = require("../Service/Userservic")

const createUserData = async(req,res)=>{
    console.log(req.body);
    
    const data = await userService.createUser(req.body)
    res.send(data)
}

const getAlluser = async(req,res)=>{
    console.log("working");
    
const User = await userService.userData();
res.send(User)

}
const getid = async(req,res)=>{
    const user = await userService.userdataid(req.params.id);
    res.send(user)
}

const deleteid = async(req,res)=>{
    const user = await userService.daletdata(req.params.id)
    res.send(user)
}
const dataupdate = async(req,res)=>{
    const user = await userService.uppdateuser(req.params.id,req.body)
    res.send(user)
}
module.exports = {
    createUserData,
    getAlluser,
    getid,
    deleteid,
    dataupdate,
}