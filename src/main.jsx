import App from './App.jsx'
// import css
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './globalStyles.jsx'
import 'react-toastify/dist/ReactToastify.css';
import LanguajeContextProvider from './contexts/LanguajeContextProvider.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'
import { Analytics } from "@vercel/analytics/react"





// wrap the app in the router
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Analytics />
    <Provider store={store}>
    <LanguajeContextProvider>
      <App />
    </LanguajeContextProvider>
    </Provider>
  </>,
)
