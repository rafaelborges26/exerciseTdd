const assert = require('../src/core/assert/assert.js')
const Product = require('../src/core/product/product.js')

var prod = new Product(1234, 'Mouse', 34.85)

describe('Testing product', () => {
    it('Testing toJson', () => {
        let mock = {'code': 1234, 'name': 'Mouse', 'price': 34.85};
        expect(prod.toJson()).toStrictEqual(mock)

    })

    it('Testing toJson is not equal', () => {
        let mock = {'code': 456, 'name': 'Erro', 'price': 0};
        expect(!assert(prod.toJson() === mock))
    })

    it('Testing fromJson', () => {
        let mock = {'code': 1234, 'name': 'Mouse', 'price': 34.85};
        let prod2 = new Product
        let prod3 = prod2.fromJson(mock)
        expect(assert(prod3 === prod))
    })

    it('Testing getCode', () => {
        expect(prod.getCode()).toBe(1234)
    })

    it('Testing getName', () => {
        expect(prod.getName()).toBe('Mouse')
    })

    it('Testing getPrice', () => {
        expect(prod.getPrice()).toBe(34.85)
    })

    it('Testing setCode', () => {

        prod.setCode(123)
        expect(prod.getCode()).toBe(123)
    })

    it('Testing setNamw', () => {

        prod.setName('Book')
        expect(prod.getName()).toBe('Book')
    })

    it('Testing setPrice', () => {
        prod.setPrice(10)
        expect(prod.getPrice()).toBe(10)
    })
})