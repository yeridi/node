const http = require('http');
var url = require('url')
const fs = require('fs');
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
   
    if (pathname === '/') {
        fs.readFile('./views/index.html',(error,html) => {
            res.end(html.toString());
        });
    } else if (pathname === '/services') {
        fs.readFile('./views/services.html',(error,html) => {
            res.end(html.toString());
        });
    } else if (pathname === '/form') {
        fs.readFile('./views/formulario.html',(error,html) => {
            res.end(html.toString());
        });;
    } else if (pathname === '/about') {
        fs.readFile('./views/aboutus.html',(error,html) => {
            res.end(html.toString());
        });
    }
}).listen(7070);


/* const fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('./index.html',(error,html) => {
        res.end(html.toString());
    });
}).listen(7070); */