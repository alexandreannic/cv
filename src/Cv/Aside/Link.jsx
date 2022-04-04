import {makeStyles} from "@material-ui/styles"
import {cssMixins} from "../../utils/style"
import {Icon} from "@material-ui/core"
import React from "react"

const iconSize = 19

const useStyles = makeStyles(t => ({
  root: {
    fontSize: cssMixins.fontMedium,
    display: 'flex',
    alignItems: 'center',
    // '&:not(last-of-type)': {
    //   paddingBottom: t.spacing(1) * 1
    // },
  },
  i: {
    marginRight: t.spacing(1),
    fontSize: `${iconSize}px !important`,
    minWidth: iconSize,
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
