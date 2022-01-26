const { describe, it } = require('mocha')
const assert = require('assert')
const sqr = require('../src/core/sqr/sqr.js')
const User = require('../src/core/user/user.js')

describe('', () => {
    it('Testing strings', () => {
        assert('pessoa' === 'pessoa')
    });
    it('Testing sqr', () => {
        assert(sqr(3) === 9)
    });
    it('Testing sqr', () => {
        assert(sqr(5) === 25)
    });
    it('Testing double', () => {
        assert(0.0 === 0.0);
    });
})
 /*
function main() {
    assert('pessoa' === 'pessoa', 'Testing strings')

    assert(sqr(3) === 9, 'Testing sqr')

    assert('pessoa' === 'pessoa', 'Testing strings')

    var admin = new User('admin', '123456')

    assert(admin.auth('admin', '123456'), 'Testing user loged')

    assert(admin.auth('admin', '123'), 'Testing user invalid')

}

main()

*/