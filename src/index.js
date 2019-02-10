import React from "react"
import ReactDOM from "react-dom"
import "./asset/reset.css"
import "./asset/print.css"
import App from "./App"
import {blue} from "@material-ui/core/colors"
import MuiThemeProviderContext from '@material-ui/styles/ThemeProvider'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {I18nContextProvider} from "./i18n/I18nContext"

const muiTheme = createMuiTheme({
  palette: {
    theme: 'dark',
    primary: {
      ...blue,
      500: '#1a73e8',
    },
    background: {
      default: '#F2F2F2'
    }
  }
})

ReactDOM.render(
  <MuiThemeProviderContext theme={muiTheme}>
    <MuiThemeProvider theme={muiTheme}>
      <I18nContextProvider>
        <App/>
      </I18nContextProvider>
    </MuiThemeProvider>
  </MuiThemeProviderContext>
  ,
  document.getElementById('root')
)
