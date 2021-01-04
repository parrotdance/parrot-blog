const fs = require('fs')
const { join } = require('path')

const filesPath = join(__dirname, '..', 'src')
const readmePath = join(__dirname, '..', 'README.md')
const header = 
`
### 链接

  [鹦鹉究竟说了什么](https://www.parrotdance.art)

### 目录
`

const resolveFileUrl = file => {
  return file.replace(/\s/g, '%20')
}
const content = fs
  .readdirSync(filesPath)
  .reduce(
    (content, file) => content + `\n- [${file}](./src/${resolveFileUrl(file)})\n`,
    header
  )

fs.writeFileSync(readmePath, content, 'utf-8')
