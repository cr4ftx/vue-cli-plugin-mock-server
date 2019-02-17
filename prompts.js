module.exports = [
  {
    name: 'viewName',
    type: 'input',
    message: 'Type a name for the page',
    default: 'clients',
    validate: v => !!v
  },
  {
    name: 'addMockServer',
    type: 'confirm',
    message: 'Add a mock server with json-server ?',
    default: true
  }
]
