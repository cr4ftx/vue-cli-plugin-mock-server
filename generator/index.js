module.exports = (api, options) => {
  api.render('./template')

  if (options.addMockServer) {
    require('./mocks')(api, options)
  }

  api.exitLog("Merci d'avoir utilisé le plugin d'Effisoft 👋")
}
