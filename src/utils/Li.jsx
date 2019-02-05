import withStyles from "@material-ui/core/es/styles/withStyles"
import React from "react"
import Icon from "@material-ui/core/es/Icon/Icon"
import {font, lineHeight, rem} from "../App"


const styles = t => ({
  root: {
    display: 'flex',
    marginBottom: t.spacing.unit / 3,
  },
  icon: {
    marginRight: t.spacing.unit,
    fontSize: rem(.6),
    lineHeight: font * lineHeight + 'px',
    height: font * 1.15,
  }
})

const Li = ({classes, children}) =>
  <div className={classes.root}>
    <Icon className={classes.icon}>fiber_manual_record</Icon>
    <div>
      {children}
    </div>
  </div>

export default withStyles(styles)(Li)
