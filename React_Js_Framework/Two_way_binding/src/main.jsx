import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import Wraper from './Wraper.jsx'

createRoot(document.getElementById('root')).render(
  <Wraper>    <App />
    <ToastContainer position='top-center' /></Wraper>



)
