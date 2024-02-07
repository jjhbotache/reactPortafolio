import App from './App.jsx'
// import css
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import react router dom and create a router
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import GlobalStyles from './globalStyles.jsx'

// wrap the app in the router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
