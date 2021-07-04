import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { colors } from '@constants/colors'
import { GlobalStyles } from '@styles/globalStyles'

export const ThemeContext = createContext({})

const AppProvider = ({ children }) => {
  return (
    <ThemeContext.Provider>
      <ThemeProvider theme={{ colors }}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default AppProvider
