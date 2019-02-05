import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "normalize.css/normalize.css"
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core"
import blue from "material-ui/colors/blue"

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
  document.getElementById('root'))
