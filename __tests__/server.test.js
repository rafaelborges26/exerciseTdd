const assert = require("assert");

const http = require('http');

describe('Integration tests', () => {
    
    it('Integration test on localhost:3000 = Server on', async () => {
        let req = http.get('http://localhost:3000')
        expect(assert(req))
    })

    it('Integration test on localhost:3000 != Server on', async () => {
        let req = http.get('http://localhost:3000')
        expect(assert(req.body !== 'Server on'))
    })
})