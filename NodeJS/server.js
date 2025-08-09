const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text'
        })
        res.write('Hello from server');
        res.end()
    }
})
server.listen(3000,() => {
    console.log('server is running on port: 3000');
    
})