import React from "react"
import ReactDOM from "react-dom"
import "./asset/reset.css"
import "./asset/print.css"
import App from "./App"
import {I18nContextProvider} from "./i18n/I18nContext"
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import {ThemeContextProvider, useAppTheme} from './theme/useAppTheme'
import {muiTheme} from './theme/theme'

const Root = () => {
  const {isDarkTheme} = useAppTheme()
  const theme = createMuiTheme(muiTheme(isDarkTheme))
  return (
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  )
}

ReactDOM.render(
  <ThemeContextProvider>
    <I18nContextProvider>
      <Root/>
    </I18nContextProvider>
  </ThemeContextProvider>
  ,
  document.getElementById('root')
)
