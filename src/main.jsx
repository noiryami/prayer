import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import AppRouter from './AppRouter.jsx'
//styles

import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";



createRoot(document.getElementById('root')).render(
  
    <AppRouter />
  ,
)


