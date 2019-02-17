module.exports = (api) => {
  api.render('./template')

  api.extendPackage({
    scripts: {
      'mock': 'json-server mocks/db.js'
    },
    devDependencies: {
      'json-server': '^0.14.2'
    },
    vue: {
      devServer: {
        proxy: 'http://localhost:3000'
      }
    }
  })
}
