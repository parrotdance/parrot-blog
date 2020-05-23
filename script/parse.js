const fs = require('fs')
const { join } = require('path')

const files = fs.readdirSync(join(__dirname, '..', 'src'))

// generate README.md
const readmePath = join(__dirname, '..', 'README.md')
const header = `# 目录\n\n`
const content = files
  .reverse()
  .reduce((content, file) => 
    content + `- [${file}](./src/${file})\n`,
    header
  )

fs.writeFileSync(readmePath, content, 'utf-8')
