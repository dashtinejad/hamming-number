function isHammingNumber(num) {
  while (num % 5 === 0) num /= 5
  while (num % 3 === 0) num /= 3
  while (num % 2 === 0) num /= 2

  return num === 1
}

function hamming(n) {
  const succession = [1]
  var length = succession.length
  var candidate = 2

  while (length < n) {
    if (isHammingNumber(candidate)) {
      succession[length] = candidate
      length++
    }

    candidate++
  }

  return succession[n - 1]
}

module.exports = hamming