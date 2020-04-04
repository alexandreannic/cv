import * as React from 'react'
import {createContext, useContext} from 'react'
import {usePersistentState} from 'react-persistent-state'

const ThemeContext = createContext({})

export const ThemeContextProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = usePersistentState(false, 'dark-theme')
  return (
    <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useAppTheme = () => useContext(ThemeContext)
