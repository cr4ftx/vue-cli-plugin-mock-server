<%_ if (options.addMockServer) { _%>
module.exports = () => {
  return {
    '<%= options.viewName %>': [{ id: 1, name: 'Paul' }]
  }
}
<%_ } _%>
