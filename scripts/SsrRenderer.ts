// https://reactjs.org/docs/react-dom-server.html
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
// https://styled-components.com/docs/advanced#server-side-rendering
import { ServerStyleSheet } from 'styled-components'

export function SSRRenderer(jsx: JSX.Element) {
  const render = process.env.SSR_STATIC ? renderToStaticMarkup : renderToString
  const sheet = new ServerStyleSheet()
  const html = render(sheet.collectStyles(jsx))
  const styles = sheet.getStyleTags()
  sheet.seal()
  return { styles, html }
}
