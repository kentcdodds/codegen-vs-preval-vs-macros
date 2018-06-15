const {createMacro} = require('babel-plugin-macros')

module.exports = createMacro(gemmafyMacro)

function gemmafyMacro({references, state, babel}) {
  references.default.forEach(referencePath => {
    const [firstArgumentPath] = referencePath.parentPath.get('arguments')
    const stringValue = firstArgumentPath.node.value
    const gemmafied = stringValue.split(' ').join(' GEMMA ')
    const gemmafyFunctionCallPath = firstArgumentPath.parentPath
    const gemmafiedStringLiteralNode = babel.types.stringLiteral(gemmafied)
    gemmafyFunctionCallPath.replaceWith(gemmafiedStringLiteralNode)
  })
}
