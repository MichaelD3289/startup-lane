import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import CandidateContextProvider from './context/CandidateContext'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <CandidateContextProvider>
        <App />
      </CandidateContextProvider>
    </BrowserRouter>
  // </React.StrictMode>
)
