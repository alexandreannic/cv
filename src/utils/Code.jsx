import React from "react"
import {cssMixins} from "./style"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles(t => ({
  Code: {
    // background: 'rgba(0,0,0,.04)', // fade(t.palette.primary.main, 0.1),
    color: t.palette.text.secondary,
    // padding: `0 ${t.spacing.unit / 2}px`,
    // fontSize: cssMixins.rem(1),
    borderRadius: 2,
    fontFamily: '"Source Code Pro", monospace',
  },
}))

const Code = ({children}) => {
  const css = useStyles()
  return (
    <span className={css.Code}>{children}</span>
  )
}

export default Code
