import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './app'
import './service'

const container = document.querySelector('#root') || document.body

if (container.children.length) {
  hydrateRoot(container, <App />)
} else {
  const root = createRoot(container)
  root.render(<App />)
}
