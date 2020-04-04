import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {cssMixins} from "../../utils/style";

const useStyles = makeStyles(t => ({
  root: {
    '&:not(:last-of-type)': {
      // borderBottom: '1px solid ' + t.palette.divider,
      paddingBottom: t.spacing(1.5),
      marginBottom: t.spacing(1.5),
    }
  },
  title: {
    marginBottom: t.spacing(1.5),
    fontSize: cssMixins.fontSmall,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: t.palette.text.hint,
    lineHeight: 1,
  }
}))

export const AsideSection = ({children, title}) => {
  const css = useStyles()
  return (
    <div className={css.root}>
      {title && <div className={css.title}>{title}</div>}
      {children}
    </div>
  )
}
