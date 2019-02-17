module.exports = [
  {
    name: 'viewName',
    type: 'input',
    message: 'Type a route for the view (use kabab-case)',
    validate: v => /^([a-z]+-)*[a-z]+$/.test(v) || 'use-kebab-case-only !'
  },
  {
    name: 'addMockServer',
    type: 'confirm',
    message: 'Add a mock server with json-server ?',
    default: true
  }
]
