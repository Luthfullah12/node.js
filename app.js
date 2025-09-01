const http = require("http")
// console.log("hello");

const Server = http.createServer((req,res)=>{
    res.write("hi this is my node server")
    res.end();
})

Server.listen((3000),()=>{
    console.log("go and check the server#")
})
