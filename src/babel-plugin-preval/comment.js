// @preval

const compose = (...fns) => fns.reduce((f, g) => a => f(g(a)))
const identity = i => i
const double = a => a * 2
const square = a => a * a

module.exports = compose(
  square,
  identity,
  double
)(3)
