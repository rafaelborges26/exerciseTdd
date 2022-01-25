const assert = require("../core/assert/assert");

const http = require('http');

http.request('http://localhost:3000', (res) => { //testando se o serve ta rodando com a resposta Server on
    const chunks = [];
    res.on('data', (chunk) => chunks.push(chunk))
    res.on('end', () => {
        const body = chunks.join('');
        assert(body === 'Server on', 'integration test on localhost:3000 === server On' )
    })
}).end()