import React from "react"
import {makeStyles} from "@material-ui/styles"
import {cssMixins} from "../utils/style"
import Logo from "../utils/Logo"

const logoSize = 20

const useStyles = makeStyles(t => ({
  Article: {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: cssMixins.fontMedium,
    '&:not(:last-of-type)': {
      paddingBottom: t.spacing.unit * 1.5,
      marginBottom: t.spacing.unit * 1.5,
      borderBottom: `1px solid ${t.palette.divider}`,
    },
  },
  body: {
    flex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  period: {
    float: 'right',
    color: t.palette.text.disabled,
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    color: t.palette.primary.main,
  },
  logo: {
    marginRight: t.spacing.unit,
  },
  title: {
    fontWeight: 500,
    flex: 1,
    fontSize: cssMixins.fontBig,
  },
  text: {
    marginTop: t.spacing.unit / 2,
    textAlign: 'justify',
    color: t.palette.text.secondary,
    fontSize: cssMixins.fontSmall,
  },
  honor: {
    color: t.palette.text.secondary,
    fontWeight: 'bold',
    fontSize: cssMixins.fontMedium
  }
}))

export const Article = ({title, period, location, logo, honor, children}) => {
  const css = useStyles()
  return (
    <div className={css.Article}>
      <div className={css.body}>
        <div className={css.header}>
          <div className={css.title}>{title} {honor && <span className={css.honor}>- {honor}</span>}</div>
          <div className={css.period}>{period}</div>
        </div>
        <div className={css.location}>
          {/*<Logo className={css.logo} src={logo} size={logoSize}/>*/}
          {location}
        </div>
        {children && <div className={css.text}>{children}</div>}
      </div>
    </div>
  )
}
