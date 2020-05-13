import fs from 'fs'
import React from 'react'
// https://reactjs.org/docs/react-dom-server.html
import { renderToString } from 'react-dom/server'
// https://styled-components.com/docs/advanced#server-side-rendering
import { ServerStyleSheet } from 'styled-components'

import { App } from '../src/app'
import { config } from './config'

function SSRRenderer(jsx: JSX.Element) {
  const sheet = new ServerStyleSheet()
  const html = renderToString(sheet.collectStyles(jsx))
  const styles = sheet.getStyleTags()
  sheet.seal()
  return { styles, html }
}

const OUTPUT_DIR = 'dist'

const ssrString = SSRRenderer(React.createElement(App))

const generateHTML = `<html><head><title>${config.templateConfig.title}</title><style>${ssrString.styles}</style></head><body><div id="${config.templateConfig.appMountId}">${ssrString.html}</div></body></html>`

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR)
}

fs.writeFileSync(`${OUTPUT_DIR}/index.ssr.html`, generateHTML)
