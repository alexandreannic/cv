import {Icon, withStyles} from "@material-ui/core"
import {font} from "../App"
import React from "react"

const styles = t => ({
  Section: {
    marginLeft: t.spacing.unit * 2,
    borderBottom: '1px solid ' + t.palette.divider,
  },
  title: {
    color: t.palette.primary.main,
    fontSize: font,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    marginBottom: t.spacing.unit * 2,
    marginTop: t.spacing.unit * 2,
  },
  i: {
    marginRight: t.spacing.unit,
  }
})

const Section = ({classes, title, icon, children}) =>
  <div className={classes.Section}>
    <div className={classes.title}>
      {/*<Icon className={classes.i}>{icon}</Icon>*/}
      {title}
    </div>
    {children}
  </div>

export default withStyles(styles)(Section)
