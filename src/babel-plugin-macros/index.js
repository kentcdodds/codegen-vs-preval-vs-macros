import gemmafy from './gemmafy.macro'
import preval from 'preval.macro'
import codegen from 'codegen.macro'

console.log(gemmafy('hello world'))

const one = preval`module.exports = 1 + 1 - 1`
// preval.require works
// preval import comments don't :-(
// // @preval doesn't now work either

codegen`
module.exports =
  process.env.NODE_ENV === 'production'
    ? "require('./production')"
    : "require('./development')"
`
// codegen.require works
// codegen import comments don't :-(
// // @codegen doesn't now work either
