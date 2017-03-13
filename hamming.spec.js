const chai = require('chai')
const expect = chai.expect
const hamming = require('./hamming')

const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, 30, 32, 36]

describe('Sample Tests', () => {
  numbers.forEach((hammingNumber, index) => {
    const numIndex = index + 1

    it(`hamming(${numIndex})`, () => {
      expect(hamming(numIndex)).to.equal(hammingNumber)
    })
  })
})