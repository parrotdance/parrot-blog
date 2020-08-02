const fs = require('fs')
const { join } = require('path')

const manifest = require('../manifest.json')

manifest.list.forEach(info => {
  Object.assign(info, { urlPath: info.id, readed: 0, vote: 0, updateTime: info.createTime })
  delete info.id
  
  const path = join(__dirname, '..', 'src', `${info.title}.md`)
  const content = fs.readFileSync(path, 'utf-8')
  Object.assign(info, { content })
})

const dbfile = JSON.stringify(manifest.list)
const dbfilePath = join(__dirname, '..', 'data.json')
fs.writeFile(dbfilePath, dbfile, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log('Export complete.')
    process.exit(0)
  }
})
console.log(`Exporting article data to: ${dbfilePath} ...`)