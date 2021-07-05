import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { colors } from '@constants/colors'
import { GlobalStyles } from '@styles/globalStyles'

export const ThemeContext = createContext({})

const AppProvider = ({ children }) => (
  <ThemeContext.Provider>
    <ThemeProvider theme={{ colors }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </ThemeContext.Provider>
)

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppProvider
