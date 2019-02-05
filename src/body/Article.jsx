import {withStyles} from "@material-ui/core"
import {font, fontBig} from "../App"
import React from "react"
import Logo from "../utils/Logo"
import {makeStyles} from "@material-ui/styles"

const logoSize = 34

const useStyles = makeStyles(t => ({
  Article: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: t.spacing.unit * 3,
    fontSize: font,
    paddingRight: t.spacing.unit * 2,
  },
  body: {
    flex: 1,
  },
  header: {
    display: 'flex',
  },
  period: {
    float: 'right',
    color: t.palette.text.disabled,
  },
  location: {
    color: t.palette.primary.main,
  },
  logo: {
    marginRight: t.spacing.unit * 2,
  },
  title: {
    fontWeight: 500,
    flex: 1,
    fontSize: fontBig,
  },
  text: {
    marginTop: t.spacing.unit / 2,
    textAlign: 'justify'
  }
}))

export const Article = ({title, period, location, logo, children}) => {
  const css = useStyles()
  return (
    <div className={css.Article}>
      {/* <Logo className={classes.logo} src={logo} size={logoSize}/> */}
      <div className={css.body}>
        <div className={css.header}>
          <div className={css.title}>{title}</div>
          <div className={css.period}>{period}</div>
        </div>
        <div className={css.location}>{location}</div>
        {children && <div className={css.text}>{children}</div>}
      </div>
    </div>
  )
}
