const httpClient = require('http');

const server = httpClient.createServer((req,res)=>{
    console.log("request is made");
});

server.listen(3000,'localhost',()=>{
    console.log("listening for request on port 3000");
});