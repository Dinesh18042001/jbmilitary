import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BackToTop } from './Component/TopArrowIcon/BackToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackToTop/>
    <App />
  </StrictMode>,
)
