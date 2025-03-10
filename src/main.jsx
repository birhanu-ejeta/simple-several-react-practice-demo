import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Accordian from './components/Accordian'
import App from './App.jsx'
import Header from "./components/Header"
import MainContent from './components/MainContent'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Accordian/>
  </StrictMode>,
)
