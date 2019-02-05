import {withStyles} from "@material-ui/core"
import {fontSmall} from "../App"
import React from "react"

const styles = t => ({
  Code: {
    background: 'rgba(0,0,0,.06)',
    padding: `0 ${t.spacing.unit / 4}px`,
    fontSize: fontSmall,
    borderRadius: 2,
    fontFamily: '"Source Code Pro", monospace',
  },
})

const Code = ({classes, children}) =>
  <span className={classes.Code}>{children}</span>

export default withStyles(styles)(Code)
