import React from "react"
import {makeStyles} from "@material-ui/styles"
import {Cv} from "./Cv/Cv"
import Icon from "@material-ui/core/Icon/Icon"
import Fab from "@material-ui/core/Fab/Fab"
import {useChangeLang, useLang} from "./i18n/I18nContext"
import Radio from "@material-ui/core/Radio/Radio"
import FormControl from "@material-ui/core/FormControl/FormControl"
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel"

const useStyles = makeStyles(t => ({
  '@global': {
    body: {
      fontFamily: 'Google Sans',
      margin: 0,
      padding: 0,
      fontSize: 14,
      backgroundColor: t.palette.background.default, //'#fafafa,
    },
    a: {
      textDecoration: 'none',
      color: t.palette.primary,
    },
    code: {
      // background: 'rgba(0,0,0,.04)', // fade(t.palette.primary.main, 0.1),
      color: t.palette.text.secondary,
      // padding: `0 ${t.spacing.unit / 2}px`,
      // fontSize: cssMixins.rem(1),
      borderRadius: 2,
      fontFamily: '"Source Code Pro", monospace',
    },
    '#printable-cv': {
      background: '#fff',
    }
  },
  root: {
    paddingTop: t.spacing.unit,
    height: '29.7cm',
    width: '21cm',
    margin: '16px auto',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: t.spacing.unit * 2,
    '& > *': {
      marginLeft: `${t.spacing.unit}px !important`,
    }
  },
  langs: {
    flexDirection: 'row !important',
    flex: 1,
  },
  btn_i: {
    marginRight: t.spacing.unit,
  },
  body: {
    marginTop: t.spacing.unit,
    marginBottom: t.spacing.unit * 2,
    boxShadow: '0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12), 0 3px 5px -1px rgba(0,0,0,.2)',
  },
}))

const App = () => {
  const css = useStyles()
  const changeLang = useChangeLang()
  const lang = useLang()
  return (
    <main className={css.root}>
      <div className={css.actions}>
        <RadioGroup
          className={css.langs}
          name="pick-lang"
          value={lang}
          onChange={e => changeLang(e.target.value)}
        >
          <FormControlLabel value="fr" control={<Radio/>} label="Fr"/>
          <FormControlLabel value="en" control={<Radio/>} label="En"/>
        </RadioGroup>
        <Fab size="medium" color="primary" aria-label="Sources">
          <Icon className="fab fa-github"/>
        </Fab>
        <Fab size="medium" onClick={() => window.print()} color="primary" aria-label="Download as PDF / Print">
          <Icon>cloud_download</Icon>
        </Fab>
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

