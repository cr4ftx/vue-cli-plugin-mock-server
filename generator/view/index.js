const toPascalCase = kebabCaseStr => {
  return kebabCaseStr
    .split('-')
    .map(([h, ...t]) => h.toUpperCase() + t.join(''))
    .join('')
}

module.exports = (api, { viewName }) => {
  const fileName = toPascalCase(viewName)

  const files = {
    [`./src/views/${viewName}/${fileName}.vue`]: './template/View.vue'
  }

  api.render(files, { viewName, fileName })

  if (api.hasPlugin('router')) {
    api.postProcessFiles(files => {
      const router = files['src/router.js']
      if (router) {
        files['src/router.js'] = router.replace(
          /routes: \[/,
          `routes: [
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
