const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { name, title } = parsedUrl.query;

    
    if (name && title) {
        const greeting = `Hello ${title} ${name}`;

        res.writeHead(200, { 'Content-Type': 'text/plain' });

    
        res.end(greeting);
    } else {
        
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Missing name or title in the query string');
    }
});

const PORT = 8081;

server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});