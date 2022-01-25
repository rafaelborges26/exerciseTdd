const assert = require('../src/core/assert/assert.js')
const sqr = require('../src/core/sqr/sqr.js')
const User = require('../src/core/user/user.js')


function main() {
    assert('pessoa' === 'pessoa', 'Testing strings')

    assert(sqr(3) === 9, 'Testing sqr')

    assert('pessoa' === 'pessoa', 'Testing strings')

    var admin = new User('admin', '123456')

    assert(admin.auth('admin', '123456'), 'Testing user loged')

    assert(admin.auth('admin', '123'), 'Testing user invalid')

}

main()