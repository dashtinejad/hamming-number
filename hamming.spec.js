const chai = require('chai')
const expect = chai.expect
const hamming = require('./hamming')
const numbers = require('./numbers')


describe('Sample Tests', () => {
  numbers.forEach((hammingNumber, index) => {
    const numIndex = index + 1

    it(`hamming(${numIndex})`, () => {
      expect(hamming(numIndex)).to.equal(hammingNumber)
    })
  })
})