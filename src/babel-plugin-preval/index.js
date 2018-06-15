import fileList from /* preval */ './get-list-of-files'
import firstThreeFiles from /* preval(3) */ './get-list-of-files-with-limit'

const fileListWithRequire = preval.require('./get-list-of-files')
const firstThreeFilesWithRequire = preval.require(
  './get-list-of-files-with-limit',
  3
)

const greeting = preval`
  const fs = require('fs')
  module.exports = fs.readFileSync(require.resolve('./greeting.txt'), 'utf8')
`

const name = 'Bob Hope'
const person = preval`
  const [first, last] = require('./name-splitter')("${name}")
  module.exports = {first, last}
`
