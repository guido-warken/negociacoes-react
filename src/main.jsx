import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const elementRoot = document.getElementById('root')
ReactDOM.createRoot(elementRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
