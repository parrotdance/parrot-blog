const fs = require('fs')
const { join } = require('path')

const files = fs.readdirSync(join(__dirname, '..', 'src'))

// generate README.md
const readmePath = join(__dirname, '..', 'README.md')
const header = `# 目录\n\n`
const content = files
  .reverse()
  .reduce((content, file) => content + `- [${file.split('.')[0]}](./src/${file})\n`, header)

fs.writeFileSync(readmePath, content, 'utf-8')

// generate manifest.json
const manifest = {
  list: files.map(f => ({
    id: f.split(' ')[0].replace('#', ''),
    name: f.replace('.md', '')
  }))
}

const manifestPath = join(__dirname, '..', 'manifest.json')

fs.writeFileSync(manifestPath, JSON.stringify(manifest))