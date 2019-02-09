import {cssMixins} from "../../utils/style"
import Logo from "../../utils/Logo"
import {Rate} from "./Rate"
import React from "react"
import {makeStyles} from "@material-ui/styles"

const logoSize = 20
const logoMargin = t => t.spacing.unit
const useStyles = makeStyles(t => ({
  root: {
    marginBottom: t.spacing.unit,
    '&:not(:last-of-type) $text': {
      borderBottom: `1px solid ${t.palette.divider}`,
    }
    // '&:not(:last-of-type)': {
    //   borderBottom: `1px solid ${t.palette.divider}`,
    // }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: cssMixins.fontMedium,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  body: {
    flex: 1,
  },
  logo: {
    marginRight: logoMargin(t),
  },
  text: {
    marginLeft: logoMargin(t) + logoSize,
    fontSize: cssMixins.fontSmall,
    marginTop: t.spacing.unit / 4,
    textAlign: 'justify',
    paddingBottom: t.spacing.unit,
    color: t.palette.text.secondary,
  }
}))

export const Skill = ({logo, title, rate, children}) => {
  const css = useStyles()
  return (
    <div className={css.root}>
      <div className={css.header}>
        <Logo src={logo} size={20} className={css.logo}/>
        <div className={css.title}>
          {title}
          <Rate rate={rate}/>
        </div>
      </div>
      <div className={css.body}>
        <div className={css.text}>{children}</div>
      </div>
    </div>
  )
}
