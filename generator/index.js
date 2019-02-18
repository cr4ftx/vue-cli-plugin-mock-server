module.exports = (api, options) => {
  require('./template')(api, options)

  if (options.addMockServer) {
    require('./mock')(api)
  }

  api.exitLog('Thanks for using effisoft plugin 👋')
}
