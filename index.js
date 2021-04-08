const http = require('http');
const { router } = require('./app');
const fs = require('fs');
const {parse} = require('querystring');
const PORT = 3000;

http.createServer((req,res)=>{
    const url = new URL(req.url,`htpp://localhost:${PORT}/`);
    const path = url.pathname;
    const {file} = router(path);
    fs.readFile(file,(error,html) => {
        let body = '';
        let data;
        if (req.method === 'POST') {
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                data = parse(body);
                const htmlString = html.toString()
                .replace('{name}',data.name)
                .replace('{email}',data.email)
                .replace('{number}',data.number)
                .replace('{date}',data.date)
                .replace('{message}',data.message);
                res.writeHead(200,{'Content-type':'text/html'});
                res.write(htmlString);
                res.end();
            });
        }else{
            res.end(html.toString());
        }
    });
}).listen(PORT);