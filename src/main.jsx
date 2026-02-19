import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './styles/GlobalStyle'
import { lightTheme, darkTheme } from './styles/theme'

export default function Root() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <App darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
