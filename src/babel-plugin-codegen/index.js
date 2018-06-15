import /* codegen */ './assign-one.js'
import /* codegen(require('path').join(process.cwd(), __filename)) */ './assign-identity'

codegen`
  const fs = require('fs')
  module.exports = fs.readFileSync(require.resolve('./some-code.js'), 'utf8')
`

const three = 3
const taggedWithInterpolation = codegen`module.exports = '${three}'`
