const httpClient = require('http');
const fs = require('fs');

const server = httpClient.createServer((req, res) => {
    console.log("request is made");
    console.log(req.url, req.method);

    //setting the content type
    res.setHeader('Content-Type', 'text/html');

    //adding page redirects
    let path = './views/';
    switch (req.url) {
        case '/': path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about': path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me': 
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default: path += '404.html';
            res.statusCode = 404;
            break;

    }
    //Read file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log("listening for request on port 3000");
});