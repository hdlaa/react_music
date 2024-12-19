module.exports = {
  env: {
    node: true
  },
  plugins: ['node'],
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'FunctionExpression',
        message: 'Function expressions are not allowed.'
      },
      {
        selector:
          "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
        message: 'setTimeout must always be invoked with two arguments.'
      }
    ]
  }
}
