const http = require('http');

http.createServer((req, res) => { //rodar servidor
    res.end('Server on')
}).listen(process.env.PORT || 3000)