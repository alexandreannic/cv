import React from "react"
import {makeStyles} from "@material-ui/styles"
import {Cv} from "./Cv/Cv"
import Icon from "@material-ui/core/Icon/Icon"
import Button from "@material-ui/core/Button/Button"
import Fab from "@material-ui/core/Fab/Fab"

const useStyles = makeStyles(t => ({
  root: {
    paddingTop: t.spacing.unit,
    height: '29.7cm',
    width: '21cm',
    margin: '16px auto',
  },
  actions: {
    marginBottom: t.spacing.unit * 2,
    textAlign: 'right',
  },
  btn_i: {
    marginRight: t.spacing.unit,
  },
  body: {
    marginTop: t.spacing.unit,
    marginBottom: t.spacing.unit * 2,
    background: '#fff',
    boxShadow: '0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12), 0 3px 5px -1px rgba(0,0,0,.2)',
  },
}))

const App = ({}) => {
  const css = useStyles()

  return (
    <main className={css.root}>
      <div className={css.actions}>
        <Fab size="medium" color="primary" aria-label="Sources">
          <i class="fab fa-github"/>
        </Fab>
        <Fab size="medium" onClick={() => window.print()} color="primary" aria-label="Download as PDF / Print">
          <Icon>cloud_download</Icon>
        </Fab>
        {/*<Button onClick={() => window.print()} color="primary" variant="outlined" aria-label="Download as PDF / Print">*/}
          {/*<Icon className={css.btn_i}>cloud_download</Icon>*/}
          {/*Download as PDF*/}
        {/*</Button>*/}
      </div>

      <div className={css.body}>
        <div id="printable-cv">
          <Cv/>
        </div>
      </div>
    </main>
  )
}

export default App

