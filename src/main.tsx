import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'

declare global {
  interface Window {
    __revealFallback?: number
  }
}

// The app has started, so scroll reveals can run normally
clearTimeout(window.__revealFallback)

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// In production the HTML is prerendered (see scripts/prerender.mjs), so hydrate it
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
