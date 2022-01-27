const assert = require('assert')
const User = require('../src/core/user/user.js')


var admin = new User('admin', '123456')

    describe('Testing of authentication', () => {
        it('Testing invalid user name', () => {
            expect(assert(!admin.auth('admi', '123456')))
        })
        it('Testing invalid user password', () => {
            expect(assert(!admin.auth('admi', '123 ')))
        })
        it('Testing valid credentials', () => {
            expect(assert(admin.auth('admin', '123456'))) 
        })
        it('Testing getName', () => {
            expect(admin.getName()).toBe('admin') 
        })
        it('Testing getPassword', () => {
            expect(admin.getPassword()).toBe('123456') 
        })
        
        it('Testing setName', () => {
            admin.setName('123456')
            expect(admin.getName()).toBe('123456') 
        })

        it('Testing setPassword', () => {
            admin.setPassword('admin')
            expect(admin.getPassword()).toBe('admin') 
        })
    })