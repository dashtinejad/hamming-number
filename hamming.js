function hamming(n) {
  const seq = [1]
  var i = 0
  var x = 1
  var i2 = -1

  var i3 = -1
  var i5 = -1

  var x2 = 2
  var x3 = 3
  var x5 = 5

  while (++i < n) {
    seq[i] = x = (x2 <= x3 && x2 <= x5) ? x2 : (x3 <= x5) ? x3 : x5

    while (x2 <= x) x2 = 2 * seq[++i2]
    while (x3 <= x) x3 = 3 * seq[++i3]
    while (x5 <= x) x5 = 5 * seq[++i5]
  }
  
  return seq[n - 1]
}

module.exports = hamming