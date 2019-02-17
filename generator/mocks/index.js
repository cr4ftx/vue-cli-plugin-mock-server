module.exports = (api, options) => {
  api.render('./template')

  api.extendPackage({
    scripts: {
      'dev:server': 'json-server mocks/db.js'
    },
    devDependencies: {
      'json-server': '^0.14.2'
    }
  })
}
