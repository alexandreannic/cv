import React from "react"
import {makeStyles} from "@material-ui/styles"
import {Cv} from "./Cv/Cv"
import Icon from "@material-ui/core/Icon/Icon"
import {useChangeLang, useLang} from "./i18n/I18nContext"
import Button from "@material-ui/core/Button/Button"
import Tooltip from "@material-ui/core/Tooltip/Tooltip"
import {RadioSet, RadioSetItem} from "./Cv/RadioSet"

const useStyles = makeStyles(t => ({
  '@global': {
    body: {
      fontFamily: 'Google Sans, Helvetica,Arial,sans-serif',
      margin: 0,
      padding: 0,
      fontSize: 14,
      backgroundColor: t.palette.background.default, //'#fafafa,
    },
    a: {
      textDecoration: 'none',
      color: t.palette.primary.main,
      fontWeight: 500,
    },
    code: {
      // background: 'rgba(0,0,0,.04)', // fade(t.palette.primary.main, 0.1),
      color: t.palette.text.secondary,
      // padding: `0 ${t.spacing.unit / 2}px`,
      // fontSize: cssMixins.rem(1),
      borderRadius: 2,
      fontFamily: '"Source Code Pro", monospace',
    },
  },
  root: {
    paddingTop: t.spacing.unit,
    margin: '16px auto',
    width: '21cm',
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
    flex: 1,
    marginLeft: '0px !important',
  },
  btn_i: {
    marginRight: t.spacing.unit,
  },
  body: {
    height: '30cm',//'29.7cm',
    background: t.palette.background.paper,
    marginTop: t.spacing.unit,
    marginBottom: t.spacing.unit * 2,
    marginRight: 'auto',
    marginLeft: 'auto',
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
        <RadioSet className={css.langs} value={lang} onChange={e => changeLang(e)}>
          <RadioSetItem value="fr">Fr</RadioSetItem>
          <RadioSetItem value="en">En</RadioSetItem>
        </RadioSet>
        <Tooltip title="Sources code">
          <Button variant="outlined" target="_blank" color="primary" href="https://github.com/alexandreannic/cv">
            <Icon className="fab fa-github"/>
          </Button>
        </Tooltip>
        <Tooltip title="Print">
          <Button variant="outlined" onClick={window.print} color="primary">
            <Icon>print</Icon>
          </Button>
        </Tooltip>
        <Tooltip title="Download as PDF">
          <Button variant="outlined" href={lang === 'fr' ? '/Alexandre_Annic-CV-fr.pdf' : '/Alexandre_Annic-CV-en.pdf'} target="_blank" color="primary">
            <Icon>cloud_download</Icon>
          </Button>
        </Tooltip>
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

