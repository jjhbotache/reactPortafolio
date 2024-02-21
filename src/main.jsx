import App from './App.jsx'
// import css
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './globalStyles.jsx'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function notify() {
  toast.info('🦄 Wow so easy!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
}

// wrap the app in the router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <ToastContainer
      position="bottom-center"
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
  </React.StrictMode>,
)
