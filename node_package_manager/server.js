const _ = require('lodash');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    //lodash
    const num = _.random(0,20);
    console.log(num);
    res.end();

    
})

server.listen(3000, 'localhost', () => {
    console.log("listening for request on port 3000");
});