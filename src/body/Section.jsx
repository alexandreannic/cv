import React from "react"
import {cssMixins} from "../utils/style"
import {makeStyles} from "@material-ui/styles"

export const sectionMargin = t => t.spacing.unit * 2

const useStyles = makeStyles(t => ({
  Section: {
    border: '1px solid ' + t.palette.divider,
    padding: t.spacing.unit * 2,
    marginBottom: sectionMargin(t),
    borderRadius: cssMixins.radius,
  },
  title: {
    fontSize: cssMixins.fontTitle,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    marginBottom: t.spacing.unit,
  },
  i: {
    marginRight: t.spacing.unit,
  }
}))

const Section = ({title, icon, children}) => {
  const css = useStyles()
  return (
    <div className={css.Section}>
      {title &&
      <div className={css.title}>
        {/*<Icon className={css.i}>{icon}</Icon>*/}
        {title}
      </div>
      }
      {children}
    </div>
  )
}

export default Section
