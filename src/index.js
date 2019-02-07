import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {blue} from "@material-ui/core/colors"
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import {createMuiTheme,} from '@material-ui/core'

const muiTheme = createMuiTheme({
  palette: {
    primary: blue,
    background: {
      default: '#F2F2F2'
    }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <App/>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
)
