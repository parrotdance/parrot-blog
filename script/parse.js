const fs = require('fs')
const { join } = require('path')

const files = fs.readdirSync(join(__dirname, '..', 'src'))

const readmePath = join(__dirname, '..', 'README.md')
const content = files.reverse().reduce((content, file) => content + `- [${file.split('.')[0]}](./src/${file})`, `# 目录\n\n`)

fs.writeFileSync(readmePath, content, 'utf-8')