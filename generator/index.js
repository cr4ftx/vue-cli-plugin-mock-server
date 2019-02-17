module.exports = (api, options) => {
  api.render('./template')

  if (options.addMockServer) {
    require('./mock')(api, options)
  }

  api.exitLog("Thanks for using effisoft plugin 👋")
}
