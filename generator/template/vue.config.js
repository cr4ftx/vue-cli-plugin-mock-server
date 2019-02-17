module.exports = {
  <%_ if (options.addMockServer) { _%>
  devServer: {
    proxy: 'http://localhost:3000'
  }
  <%_ } _%>
}
