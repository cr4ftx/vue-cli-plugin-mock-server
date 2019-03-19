module.exports = (api, options) => {
  require('./view')(api, options)

  if (options.addMockServer) {
    require('./mock')(api)
  }

  api.exitLog('Thanks for using mock-server plugin 👋')
}
