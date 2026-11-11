// Renders the React app to static HTML and injects it into dist/index.html,
// so search engines and slow connections see the full page before JS loads.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist')
const serverDir = resolve('dist-server')
const { render } = await import(pathToFileURL(resolve(serverDir, 'entry-server.js')).href)

const file = resolve(dist, 'index.html')
const html = await readFile(file, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('Placeholder <!--app-html--> not found in dist/index.html')

await writeFile(file, html.replace('<!--app-html-->', render()))
await rm(serverDir, { recursive: true, force: true })
console.log('Prerendered dist/index.html')
