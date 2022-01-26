const assert = require("../src/core/assert/assert");

const http = require('http');

describe('Integration tests', () => {
    
    it('Integration test on localhost:3000 = Server on', () => {

    http.request('http://localhost:3000', (res) => { //testando se o serve ta rodando com a resposta Server on
    const chunks = [];
    res.on('data', (chunk) => chunks.push(chunk))
    res.on('end', () => {
        const body = chunks.join('');
        assert(body === 'Server on')
    })
    }).end()

    })

    it('Integration test on localhost:3000 != Server on', () => {

        http.request('http://localhost:3000', (res) => { //testando se o serve ta rodando com a resposta Server on
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk))
        res.on('end', () => {
            const body = chunks.join('');
            assert(body !== 'Server on')
        })
        }).end()
        
        })
})