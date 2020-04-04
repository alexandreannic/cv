import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Cv} from "./Cv/Cv"
import Icon from "@material-ui/core/Icon/Icon"
import {useChangeLang, useLang} from "./i18n/I18nContext"
import Button from "@material-ui/core/Button/Button"
import Tooltip from "@material-ui/core/Tooltip/Tooltip"
import {RadioSet, RadioSetItem} from "./Cv/RadioSet"
import {useAppTheme} from './theme/useAppTheme'

const useStyles = makeStyles(t => ({
  '@global': {
    '@media print': {
      '[role="tooltip"]': {
        display: 'none',
      },
    },
    body: {
      fontFamily: 'Google Sans, Helvetica,cArial, sans-serif',
      margin: 0,
      padding: 0,
      color: t.palette.text.primary,
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
      color: t.palette.text.disabled,
      // padding: `0 ${t.spacing(1) / 2}px`,
      // fontSize: cssMixins.rem(1),
      // borderRadius: 2,
      fontFamily: '"Source Code Pro", monospace',
    },
  },
  root: {
    paddingTop: t.spacing(1),
    margin: '16px auto',
    width: '21cm',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: t.spacing(2),
    '& > *': {
      marginLeft: `${t.spacing(1)}px !important`,
    }
  },
  langs: {
    flex: 1,
    marginLeft: '0px !important',
  },
  btn_i: {
    marginRight: t.spacing(1),
  },
  body: {
    height: '30cm',//'29.7cm',
    background: t.palette.background.paper,
    marginTop: t.spacing(1),
    marginBottom: t.spacing(2),
    marginRight: 'auto',
    marginLeft: 'auto',
    boxShadow: '0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12), 0 3px 5px -1px rgba(0,0,0,.2)',
  },
}))

const App = () => {
  const css = useStyles()
  const changeLang = useChangeLang()
  const {isDarkTheme, setIsDarkTheme} = useAppTheme()
  const lang = useLang()
  return (
    <main className={css.root}>
      <div className={css.actions}>
        <RadioSet className={css.langs} value={lang} onChange={e => changeLang(e)}>
          <RadioSetItem value="fr">Fr</RadioSetItem>
          <RadioSetItem value="en">En</RadioSetItem>
        </RadioSet>

        <Tooltip title="Dark theme">
          <Button variant="outlined"
                  color="primary"
                  onClick={() => setIsDarkTheme(_ => !_)}>
            <Icon>{isDarkTheme ? 'brightness_high' : 'brightness_low'}</Icon>
          </Button>
        </Tooltip>

        <Tooltip title="Sources code">
          <Button variant="outlined"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  href="https://github.com/alexandreannic/cv">
            <Icon className="fab fa-github"/>
          </Button>
        </Tooltip>
        <Tooltip title="Print (CTRL+P)">
          <Button variant="outlined" onClick={() => {
            if (isDarkTheme) setIsDarkTheme(false)
            setTimeout(window.print)
          }} color="primary">
            <Icon>print</Icon>
          </Button>
        </Tooltip>
        <Tooltip title="Download as PDF">
          <Button variant="outlined"
                  href={`/Alexandre_Annic-CV-${lang}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary">
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

