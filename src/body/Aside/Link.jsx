import {makeStyles} from "@material-ui/styles"
import {cssMixins} from "../../utils/style"
import {Icon} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(t => ({
  Info: {
    fontSize: cssMixins.fontMedium,
    display: 'flex',
    alignItems: 'center',
    '&:not(last-of-type)': {
      paddingBottom: t.spacing.unit * 1
    },
  },
  Info_i: {
    marginRight: t.spacing.unit,
    fontSize: '20px !important',
    minWidth: 18,
    textAlign: 'center',
    display: 'inline-block',
    color: t.palette.text.secondary,
  },
}))

export const Link = ({icon, iconFa, children}) => {
  const css = useStyles()
  return (
    <main className={css.Info}>
      {icon
        ? <Icon className={css.Info_i}>{icon}</Icon>
        : <i className={`fab fa-${iconFa} ${css.Info_i}`}/>
      }
      {children}
    </main>
  )
}
