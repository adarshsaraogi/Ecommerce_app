var http = require('http');
var server = http.createServer((req,res)=>{
    return res.end ("hello world");
})
server.listen(2000,()=>{console.log("server listening to port 2000");});