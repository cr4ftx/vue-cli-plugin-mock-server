module.exports = api => {
  api.render('./template')

  api.extendPackage({
    scripts: {
      mock: 'json-server mock/db.js -d 1000',
      dev: 'concurrently "npm:mock" "npm:serve"'
    },
    devDependencies: {
      'json-server': '^0.14.2',
      concurrently: '^4.1.0'
    },
    vue: {
      devServer: {
        proxy: {
          '^/api': {
            target: 'http://localhost:3000',
            pathRewrite: { '^/api': '' }
          }
        }
      }
    }
  })
}
