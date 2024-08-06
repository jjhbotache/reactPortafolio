import React, { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Bounce, ToastContainer } from 'react-toastify'
import { darkTheme, lightTheme } from './themes'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector(state => state.theme)


  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
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
          theme={theme === darkTheme ? "dark" : "light"}
          transition={Bounce}
        />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
