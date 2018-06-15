const glob = require('glob')
module.exports = limit => glob.sync('*.js').slice(0, limit)
