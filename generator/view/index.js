const toPascalCase = kebabCaseStr => {
  return kebabCaseStr
    .split('-')
    .map(word => {
      const [h, ...t] = word
      return h.toUpperCase() + t.join('')
    })
    .join('')
}

module.exports = (api, { viewName }) => {
  const fileName = toPascalCase(viewName)

  const files = {
    [`./src/views/${viewName}/${fileName}.vue`]: './template/View.vue'
  }

  api.render(files, { viewName })

  if (api.hasPlugin('router')) {
    api.postProcessFiles(files => {
      const router = files['src/router.js']
      if (router) {
        files['src/router.js'] = router.replace(
          /routes: \[/,
          `routes: [
  // use this webpackChunkName to split the nested components for the view
  {
    path: '/${viewName}',
    name: '${viewName}',
    component: () => import(/* webpackChunkName: "${viewName}" */ '@/views/${viewName}/${fileName}.vue')
  },`
        )
      }
    })
  }
}
