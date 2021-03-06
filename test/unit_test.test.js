const { describe, it } = require('mocha')
const assert = require('assert')
const sqr = require('../src/core/sqr/sqr.js')

describe('Testing types and values', () => {
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