import {cssMixins} from "../../utils/style"
import Logo from "../../utils/Logo"
import {Rate} from "./Rate"
import React from "react"
import {makeStyles} from "@material-ui/styles"

const logoSize = 18
const logoMargin = t => t.spacing(1)
const useStyles = makeStyles(t => ({
  root: {
    '&:not(:last-of-type) $text': {
      marginBottom: t.spacing(1),
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
    marginTop: t.spacing(1) / 4,
    paddingBottom: t.spacing(1),
    color: t.palette.text.secondary,
  }
}))

export const Skill = ({logo, title, rate, children}) => {
  const css = useStyles()
  return (
    <div className={css.root}>
      <div className={css.header}>
        <Logo src={logo} size={logoSize} className={css.logo}/>
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
