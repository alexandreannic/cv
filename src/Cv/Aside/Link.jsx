import {makeStyles} from "@material-ui/styles"
import {cssMixins} from "../../utils/style"
import {Icon} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(t => ({
  root: {
    fontSize: cssMixins.fontMedium,
    display: 'flex',
    alignItems: 'center',
    '&:not(last-of-type)': {
      paddingBottom: t.spacing.unit * 1
    },
  },
  i: {
    marginRight: t.spacing.unit * 1.5,
    fontSize: '20px !important',
    minWidth: 18,
    textAlign: 'center',
    display: 'inline-block',
    // color: t.palette.text.secondary,
    color: t.palette.primary.main,
  },
}))

export const Link = ({icon, iconFa, children}) => {
  const css = useStyles()
  return (
    <div className={css.root}>
      {icon
        ? <Icon className={css.i}>{icon}</Icon>
        : <i className={`fab fa-${iconFa} ${css.i}`}/>
      }
      {children}
    </div>
  )
}
