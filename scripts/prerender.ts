import fs from 'fs'
import path from 'path'
import React from 'react'

import { App } from '../src/app'
import { config, ssrHtmlPlaceholder, ssrStylesPlaceholder } from './config'
import { SSRRenderer } from './SsrRenderer'

const HTML_FILE = path.join(process.cwd(), config.outputDir, 'index.html')
const ssrResult = SSRRenderer(React.createElement(App))

// <html>
//   <head>
//     <title>${config.templateConfig.title}</title>
//     <style>${ssrString.styles}</style>
//   </head>
//   <body>
//     <div id="${config.templateConfig.appMountId}">${ssrString.html}</div>
//   </body>
// </html>
const generateHTML = fs
  .readFileSync(HTML_FILE, 'utf8')
  .replace(ssrHtmlPlaceholder, ssrResult.html)
  .replace(ssrStylesPlaceholder, ssrResult.styles)

fs.writeFileSync(HTML_FILE, generateHTML)
