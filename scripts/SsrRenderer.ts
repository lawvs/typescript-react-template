import fs from 'fs'
import React from 'react'
// https://reactjs.org/docs/react-dom-server.html
import { renderToString } from 'react-dom/server'
// https://styled-components.com/docs/advanced#server-side-rendering
import { ServerStyleSheet } from 'styled-components'

import { name } from '../package.json'
import { App } from '../src/app'

function SSRRenderer(jsx: JSX.Element, appMountId = 'root') {
  const sheet = new ServerStyleSheet()
  const html = renderToString(sheet.collectStyles(jsx))
  const styles = sheet.getStyleTags()
  sheet.seal()
  return `<style>${styles}</style><div id="${appMountId}">${html}</div>`
}

const OUTPUT_DIR = 'dist'

const ssrString = SSRRenderer(React.createElement(App))
const generateHTML = `<html><head><title>${name}</title></head><body>${ssrString}</body></html>`

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR)
}

fs.writeFileSync(`${OUTPUT_DIR}/index.ssr.html`, generateHTML)
