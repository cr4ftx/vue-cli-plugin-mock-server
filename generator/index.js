const fs = require('fs')
const path = require('path')

function toPascalCase(kebabCaseStr) {
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

module.exports = (api, options) => {
  if (options.addMockServer) {
    require('./mock')(api, options)
  }

  api.onCreateComplete(() => {
    try {
      const viewDirPath = path.resolve('src/views', options.viewName)
      const fileName = toPascalCase(options.viewName)
      const dest = path.resolve(`${viewDirPath}/${fileName}.vue`)

      fs.mkdirSync(viewDirPath)
      fs.writeFileSync(dest, getView(options.viewName), 'utf8')

      api.exitLog('Thanks for using effisoft plugin 👋')
    } catch(err) {
      api.exitLog(err.message, 'error')
    }
  })

}
