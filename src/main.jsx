import App from './App.jsx'
// import css
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import LanguajeContextProvider from './contexts/LanguajeContextProvider.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'







// wrap the app in the router
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    
    <Provider store={store}>
    <LanguajeContextProvider>
      <App />
    </LanguajeContextProvider>
    </Provider>
  </>,
)
