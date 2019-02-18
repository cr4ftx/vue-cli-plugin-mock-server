const fs = require('fs')

const toPascalCase = kebabCaseStr => {
  return kebabCaseStr
    .split('-')
    .map(word => {
      const [h, ...t] = word
      return h.toUpperCase() + t.join('')
    })
    .join('')
}

const getView = name => `
<template>
  <div>
    <h1>${name}</h1>
  </div>
</template>

<script>
export default {
  name: '${name}'
}
</script>
`.trim()

module.exports = (api, { viewName }) => {
  if (api.invoking) {
    const viewDirPath = api.resolve(`src/views/${viewName}`)
    const fileName = toPascalCase(viewName)
    const dest = api.resolve(`${viewDirPath}/${fileName}.vue`)

    fs.mkdirSync(viewDirPath)
    fs.writeFileSync(dest, getView(viewName), 'utf8')

    if (api.hasPlugin('router')) {
      api.postProcessFiles(files => {
        const router = files['src/router.js']
        if (router) {
          files['src/router.js'] = router.replace(/routes: \[/, `routes: [
    {
      path: '/${viewName}',
      name: '${viewName}',
      component: () => import(/* webpackChunkName: "${viewName}" */ '@/views/${viewName}/${fileName}.vue')
    },`)
        }
      })
    }
  }
}
