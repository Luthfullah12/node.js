const mongoose = require("mongoose")
const mongoURL = `mongodb+srv://luthfullah0004_db_user:YQo4ql7YPiCA4k9O@cluster0.imv3fot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(mongoURL)
.then(()=>{
    console.log("DB connected");
    
})
.catch((Error)=>{
    console.log("Error occured when connecting with DB",Error);
    
})
module.exports = mongoose.connection