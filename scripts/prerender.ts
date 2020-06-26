import fs from 'fs'
import path from 'path'
import React from 'react'

import { App } from '../src/app'
import { config } from './config'
import { render } from './SsrRenderer'

const HTML_FILE = path.join(process.cwd(), config.outputDir, 'index.html')
const ssrResult = render(React.createElement(App))

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
  .replace(ssrResult.placeholder.html, ssrResult.html)
  .replace(ssrResult.placeholder.styles, ssrResult.styles)

fs.writeFileSync(HTML_FILE, generateHTML)
