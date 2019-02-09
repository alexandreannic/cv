import {makeStyles} from "@material-ui/styles"
import React from "react"
import {cssMixins} from "../../utils/style"

const useStyles = makeStyles(t => ({
  root: {
    borderBottom: '1px solid ' + t.palette.divider,
    '&:not(:last-of-type)': {
      paddingBottom: t.spacing.unit * 1.5,
      marginBottom: t.spacing.unit * 1.5,
    }
  },
  title: {
    marginBottom: t.spacing.unit * 1.5,
    fontSize: cssMixins.fontBig,
    fontWeight: 500,
    lineHeight: 1,
  }
}))

export const AsideSection = ({children, title}) => {
  const css = useStyles()
  return (
    <div className={css.root}>
      <div className={css.title}>{title}</div>
      {children}
    </div>
  )
}
