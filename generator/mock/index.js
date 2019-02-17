module.exports = (api) => {
  api.render('./template')

  api.extendPackage({
    scripts: {
      'mock': 'json-server mock/db.js -d 1000',
      'dev': 'concurrently "npm:mock" "npm:serve"'
    },
    devDependencies: {
      'json-server': '^0.14.2',
      'concurrently': '^4.1.0'
    },
    vue: {
      devServer: {
        proxy: 'http://localhost:3000'
      }
    }
  })

  api.exitLog('You can run the mock server with npm run mock', 'info')
  api.exitLog('But you may want to use npm run dev to serve the app and mock the server', 'info')
}
