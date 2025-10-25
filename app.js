// const http = require("http")
// const Os = require("os")
// const fs = require("fs")
// const EventEmitter = require("events")


// var eventEmitter = new EventEmitter()
// eventEmitter.on("my name",(msg)=>{
//   console.log(msg);
  
// })
// eventEmitter.emit("my name","MY name is luthdullah");

// // console.log("hello");
// // Os Module
// // console.log(Os.arch());
// // console.log(Os.freemem());
// // console.log(Os.hostname());
// // console.log(Os.type());
// // console.log(Os.homedir());
// // Fs module
// // fs.writeFile("demo.txt","good morning",(err)=>{
// //     if (err) throw err
// //     console.log("data updated");
    
// // })

// // fs.readFile("demo.txt","utf-8",(err,data)=>{
// //     if (err) throw err
// //     console.log(data);
    
// // })

// // fs.rmdir("demo.txt", (err) => {
// //   if (err) throw err;
// //   console.log("Folder removed!");
// // });

// // fs.appendFile("demo.txt","\nhi helo",(err)=>{
// //     if(err) throw err
// //     console.log("data updated");
    
// // })

// // fs.rename("demo.txt","newFile.txt",(err)=>{
// //     if(err) throw err
// //     console.log("data updated");
    
// // })
// // // //creat foulder
// // fs.mkdir("myFolder", (err) => {
// //   if (err) throw err;
// //   console.log("Folder created!");
// // });
// // fs.rmdir("myFolder", (err) => {
// //   if (err) throw err;
// //   console.log("Folder removed!");
// // });

// const Server = http.createServer((req,res)=>{
//     res.write("hi this is my node server")
//     res.end();
// })

// Server.listen((3000),()=>{
//     console.log("go and check the server#")
// })

const express = require("express")
const app = express()
const db = require("./src/config/DB")
 const userRouter = require("./src/router/Userrout")
 const productRouter = require("./src/router/productrout")
 const bodyparser = require("body-parser")
 const cors = require("cors")
app.use(bodyparser.json())
app.use(cors())
 app.use("/user",userRouter)
 app.use("/product",productRouter)

db.on("open",()=>{
    app.listen(4000,()=>{
        console.log("server is running on port 4000");
    })
})

db.on("error",(error)=>{
    console.log("Getting error while connecting with DB");
    
})