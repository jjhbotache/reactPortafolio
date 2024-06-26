import App from './App.jsx'
// import css
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './globalStyles.jsx'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LanguajeContextProvider from './contexts/LanguajeContextProvider.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'





// wrap the app in the router
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
    <LanguajeContextProvider>
      <GlobalStyles />
      <App />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
    </LanguajeContextProvider>
    </Provider>
  </>,
)
