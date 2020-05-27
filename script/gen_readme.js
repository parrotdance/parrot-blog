const fs = require('fs')
const { join } = require('path')

const files = fs.readdirSync(join(__dirname, '..', 'src'))

// generate README.md
const readmePath = join(__dirname, '..', 'README.md')
const header = `# 链接\n
  [鹦鹉究竟说了什么](https://www.parrotdance.art)\n
  # 目录\n
`
const content = files.reduce((content, file) => 
  content + `- [${file}](./src/${file})\n`,
  header
)

fs.writeFileSync(readmePath, content, 'utf-8')
