import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
